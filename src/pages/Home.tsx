import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { analyzeSentence, getRandomAnalyzedSentence, SentenceAnalysis } from '../services/geminiService';
import GrammarTree from '../components/GrammarTree';
import { Loader2, Shuffle, Upload, BookOpen, Sparkles, Lightbulb, Search, Target, Zap, Flag, Languages } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [customSentence, setCustomSentence] = useState('');
  const [analysis, setAnalysis] = useState<SentenceAnalysis | null>(null);
  const [error, setError] = useState('');

  const [loadingMessage, setLoadingMessage] = useState('AI 老师正在分析语法结构...');

  useEffect(() => {
    let interval: any;
    if (loading) {
      const messages = [
        'AI 老师正在分析语法结构...',
        '正在生成地道中文翻译...',
        '正在拆解长难句核心成分...',
        '正在整理重点词汇释义...',
        '即将完成，请稍后...'
      ];
      let i = 0;
      interval = setInterval(() => {
        setLoadingMessage(messages[i % messages.length]);
        i++;
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleRandomDraw = async () => {
    setLoading(true);
    setError('');
    setAnalysis(null);
    try {
      const result = await getRandomAnalyzedSentence();
      setAnalysis(result);
    } catch (err) {
      setError('获取句子失败，请重试。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeCustom = async () => {
    if (!customSentence.trim()) return;
    setLoading(true);
    setError('');
    setAnalysis(null);
    try {
      const result = await analyzeSentence(customSentence);
      setAnalysis(result);
    } catch (err) {
      setError('分析失败，请重试。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Action Area - Separate Row */}
      {!analysis && !loading && (
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Shuffle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">随机抽取</h2>
            <p className="text-slate-500 mb-6">从剑桥雅思题库中随机抽取一句高难度长难句</p>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleRandomDraw}
                disabled={loading}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Shuffle className="w-5 h-5" />}
                {loading ? '抽取中...' : '抽取一句'}
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">自己输入</h2>
            <p className="text-slate-500 mb-6">输入你在做题时遇到的长难句进行解析</p>
            <div className="w-full flex gap-2">
              <input
                type="text"
                value={customSentence}
                onChange={(e) => setCustomSentence(e.target.value)}
                placeholder="Paste your sentence here..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyzeCustom()}
              />
              <button
                onClick={handleAnalyzeCustom}
                disabled={loading || !customSentence.trim()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : '解析'}
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-500 mb-4" />
          <h2 className="text-xl font-bold text-slate-800">{loadingMessage}</h2>
          <p className="text-slate-500 mt-2">正在为您深度解析雅思高难度长难句</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
          {error}
        </div>
      )}

      {/* Analysis View */}
      {analysis && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Sentence Focus */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Original Sentence
              </h3>
              {analysis.source && (
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold font-mono border border-emerald-100">
                  {analysis.source}
                </span>
              )}
            </div>
            <p className="text-2xl font-medium text-slate-800 leading-relaxed mb-2">
              {analysis.text}
            </p>
          </div>

          {/* Syntax Tree - Full Width */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
            <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-6">
              Syntax Structure
            </h3>
            <GrammarTree data={analysis.grammarTree} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Explanation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">名师拆解</h3>
                  <p className="text-xs font-medium text-emerald-500 uppercase tracking-wider">Step-by-step</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-200 via-blue-200 to-amber-200 opacity-50" />
                <div className="space-y-6">
                  {analysis.explanation.map((step, idx) => {
                    const colors = [
                      'bg-emerald-50 border-emerald-100 text-emerald-800 shadow-emerald-100/50',
                      'bg-blue-50 border-blue-100 text-blue-800 shadow-blue-100/50',
                      'bg-amber-50 border-amber-100 text-amber-800 shadow-amber-100/50',
                      'bg-purple-50 border-purple-100 text-purple-800 shadow-purple-100/50',
                      'bg-rose-50 border-rose-100 text-rose-800 shadow-rose-100/50',
                    ];
                    const icons = [Search, Target, Zap, Sparkles, Flag];
                    const colorClass = colors[idx % colors.length];
                    const Icon = icons[idx % icons.length];

                    return (
                      <div key={idx} className="relative pl-14 group">
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center font-bold text-sm z-10 transition-transform group-hover:scale-110 group-hover:rotate-12 ${colorClass.split(' ')[2]}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className={`p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorClass}`}>
                          <p className="leading-relaxed font-medium">
                            {/* Simple text formatting to make English parts or punctuation stand out a bit if needed, but rendering raw text is safe */}
                            {step}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Vocabulary */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
              <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-6">
                Key Vocabulary
              </h3>
              <div className="space-y-3">
                {analysis.vocabulary.map((v, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div>
                      <span className="font-bold text-slate-800 text-lg mr-2">{v.word}</span>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">
                        {v.pos}
                      </span>
                    </div>
                    <span className="text-slate-600">{v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Translation Contrast */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
            <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5" /> 终极对照 Translation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg mb-4">EN</span>
                <p className="text-lg text-slate-700 leading-relaxed">{analysis.text}</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="inline-block px-3 py-1 bg-emerald-200 text-emerald-800 text-xs font-bold rounded-lg mb-4">中文</span>
                <p className="text-lg text-emerald-900 leading-relaxed">{analysis.translation}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center pt-8 border-t border-slate-100">
            <button
              onClick={() => {
                setAnalysis(null);
                setCustomSentence('');
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-sm border border-slate-200"
            >
              返回首页
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
