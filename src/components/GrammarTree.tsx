import { useState } from 'react';
import { GrammarNode } from '../services/geminiService';
import { ChevronDown, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GrammarTreeProps {
  data: GrammarNode;
}

const labelColors: Record<string, string> = {
  '主语': 'bg-blue-50 text-blue-600 border-blue-200',
  '谓语': 'bg-red-50 text-red-600 border-red-200',
  '宾语': 'bg-green-50 text-green-600 border-green-200',
  '定语': 'bg-purple-50 text-purple-600 border-purple-200',
  '状语': 'bg-amber-50 text-amber-600 border-amber-200',
  '补语': 'bg-cyan-50 text-cyan-600 border-cyan-200',
  '从句': 'bg-indigo-50 text-indigo-600 border-indigo-200',
  '句子结构': 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

interface NodeItemProps {
  node: GrammarNode;
  depth?: number;
  key?: string | number;
}

function NodeItem({ node, depth = 0 }: NodeItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  
  const colorClass = labelColors[node.label] || 'bg-slate-50 text-slate-600 border-slate-200';

  return (
    <div className={`p-3 rounded-2xl border flex flex-col gap-2 transition-all duration-300 hover:shadow-sm ${colorClass}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider bg-white/60 px-2 py-1 rounded-md shrink-0">
            {node.label}
          </span>
          {(!hasChildren || !isExpanded) ? (
            <span className="text-sm font-medium leading-relaxed">
              {node.text}
            </span>
          ) : (
            <span className="text-xs font-medium opacity-60 truncate max-w-[200px]" title={node.text}>
              {node.text}
            </span>
          )}
        </div>
        {hasChildren && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-white/50 rounded-md transition-colors shrink-0"
          >
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && hasChildren && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-row flex-wrap gap-2 pt-3 mt-1 border-t border-current/10 items-stretch">
              {node.children!.map((child) => (
                <div key={child.id} className="flex-auto min-w-0 max-w-full">
                  <NodeItem node={child} depth={depth + 1} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GrammarTree({ data }: GrammarTreeProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-emerald-100 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-emerald-800">
        <Layers className="w-5 h-5" />
        <h3 className="font-bold">层级结构透视</h3>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <NodeItem node={data} />
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex flex-wrap gap-4 justify-center">
        {Object.entries(labelColors).map(([label, colors]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full border ${colors.split(' ')[2]} ${colors.split(' ')[0]}`} />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
