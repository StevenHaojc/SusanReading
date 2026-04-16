import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { BookOpen, Trash2, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

interface Mistake {
  id: string;
  sentenceText: string;
  notes: string;
  createdAt: any;
}

export default function MistakeBook() {
  const { user } = useAuth();
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchMistakes();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchMistakes = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const q = query(
        collection(db, 'mistakes'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Mistake[];
      setMistakes(data);
    } catch (error) {
      console.error("Error fetching mistakes:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeMistake = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'mistakes', id));
      setMistakes(prev => prev.filter(m => m.id !== id));
    } catch (error) {
      console.error("Error removing mistake:", error);
    }
  };

  if (!user) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-4">请先登录</h2>
        <p className="text-slate-500">登录后即可查看您的错题本</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-emerald-800">我的错题本</h1>
          <p className="text-slate-500 mt-1">复习那些让你头疼的长难句</p>
        </div>
        <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg font-medium border border-amber-100">
          共 {mistakes.length} 句
        </div>
      </div>

      {mistakes.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-emerald-100 text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">错题本空空如也</h3>
          <p className="text-slate-500">太棒了！继续保持，攻克更多长难句吧！</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {mistakes.map((mistake) => (
            <div key={mistake.id} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 group">
              <div className="flex justify-between items-start gap-4">
                <p className="text-lg font-medium text-slate-800 leading-relaxed flex-1">
                  {mistake.sentenceText}
                </p>
                <button
                  onClick={() => removeMistake(mistake.id)}
                  className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="移除"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                <span>添加时间: {mistake.createdAt?.toDate ? format(mistake.createdAt.toDate(), 'yyyy-MM-dd HH:mm') : '未知'}</span>
                <span className="bg-slate-100 px-3 py-1 rounded-full">{mistake.notes}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
