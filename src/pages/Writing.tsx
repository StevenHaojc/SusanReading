import React, { useState, useEffect } from 'react';
import { Layers, GitMerge, FileWarning, Quote, Feather, PlayCircle, RefreshCw, PenTool } from 'lucide-react';
import { TOPICS, DATA } from '../data/writingData';
import EXAM_DATA from '../data/exam_data';
import { motion, AnimatePresence } from 'motion/react';

// Common Components
const SectionTitle = ({ icon: Icon, title, color }: any) => (
  <h3 className="flex items-center gap-2 text-lg font-bold mb-4" style={{ color }}>
    <Icon size={20} />
    {title}
  </h3>
);

export default function Writing() {
  const [activeTopicId, setActiveTopicId] = useState(TOPICS[0]?.id);
  const [randomQuestion, setRandomQuestion] = useState<any>(null);

  // When topic changes, pick a random question for that topic
  useEffect(() => {
    const topicExams = EXAM_DATA.filter((item: any) => item.t === activeTopicId);
    if (topicExams.length > 0) {
      const randomId = Math.floor(Math.random() * topicExams.length);
      setRandomQuestion(topicExams[randomId]);
    } else {
      setRandomQuestion(null);
    }
  }, [activeTopicId]);

  const activeTopic = TOPICS.find((t: any) => t.id === activeTopicId);
  const topicData = activeTopic ? DATA[activeTopicId] : null;

  return (
    <div className="min-h-screen bg-orange-50 font-sans pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-orange-900 flex items-center gap-3">
              <PenTool className="w-8 h-8 text-orange-500" />
              雅思大作文学习卡片
            </h1>
            <p className="text-orange-600 mt-2 font-medium">每天掌握一个核心话题，轻松攻克大作文写作逻辑</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8">
        {/* Topic Selector */}
        <div className="flex flex-wrap gap-3 mb-8 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
          {TOPICS.map((topic: any) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTopicId === topic.id 
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-200 ring-2 ring-orange-500 ring-offset-2'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
              }`}
            >
              <span>{topic.emoji}</span>
              {topic.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {topicData && activeTopic && (
            <motion.div
              key={activeTopicId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Question Card */}
              {randomQuestion && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-orange-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -z-10 opacity-50" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold px-3 py-1 bg-orange-100 text-orange-700 rounded-lg">
                      🔥 随机真题 ({randomQuestion.d} / {randomQuestion.y})
                    </span>
                    <button 
                      onClick={() => {
                        const topicExams = EXAM_DATA.filter((item: any) => item.t === activeTopicId);
                        const randomId = Math.floor(Math.random() * topicExams.length);
                        setRandomQuestion(topicExams[randomId]);
                      }}
                      className="text-orange-500 hover:text-orange-600 flex items-center gap-1 text-sm font-medium"
                    >
                      <RefreshCw size={14} /> 换一题
                    </button>
                  </div>
                  <p className="text-lg font-medium text-slate-800 italic leading-relaxed">
                    "{randomQuestion.q}"
                  </p>
                </div>
              )}

              {/* Master Logic */}
              {topicData.masterLogic && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                  <SectionTitle icon={PlayCircle} title="底层逻辑 (Master Logic)" color={activeTopic.color} />
                  <p className="text-slate-500 text-sm mb-6">{topicData.masterLogic.hint}</p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center mb-8">
                    <span className="text-2xl font-bold" style={{ color: activeTopic.color }}>
                      {topicData.masterLogic.formula}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {topicData.masterLogic.parts.map((p: any, i: number) => (
                      <div key={i} className="bg-white p-4 rounded-xl border-2 border-slate-50 shadow-sm text-center group hover:border-slate-200 transition-colors">
                        <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg" style={{ backgroundColor: `${activeTopic.color}15`, color: activeTopic.color }}>
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">{p.label}</h4>
                        <p className="text-xs text-slate-500">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Essay Structure */}
                {topicData.essayStructure && (
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                    <SectionTitle icon={Layers} title="行文结构 (Structure)" color={activeTopic.color} />
                    <div className="space-y-4 mt-6">
                      {topicData.essayStructure.parts.map((p: any, i: number) => (
                        <div key={i} className="flex gap-4 items-stretch group">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white shadow-sm" style={{ backgroundColor: activeTopic.color }}>
                              {p.role.replace('主体', 'P')}
                            </div>
                            {i < topicData.essayStructure.parts.length - 1 && (
                              <div className="w-0.5 h-full bg-slate-100 my-1 group-hover:bg-slate-200 transition-colors" />
                            )}
                          </div>
                          <div className="bg-slate-50 flex-1 p-4 rounded-xl border border-slate-100 flex flex-col justify-center mb-2">
                            <p className="font-medium text-slate-700">{p.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Replacements & Negatives */}
                <div className="space-y-6">
                  {topicData.negative && (
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                      <SectionTitle icon={FileWarning} title="反面/弊端补充" color={activeTopic.color} />
                      <ul className="space-y-3 mt-4">
                        {topicData.negative.map((neg: any, i: number) => (
                          <li key={i} className="flex gap-3 text-slate-700 bg-red-50/50 p-3 rounded-lg border border-red-100/50">
                            <span className="text-red-400 mt-1">✕</span>
                            <div>
                              <p className="font-medium">{neg.cn}</p>
                              <p className="text-sm text-slate-500 mt-1">{neg.en}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topicData.replacements && (
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                      <SectionTitle icon={Feather} title="高分词汇替换" color={activeTopic.color} />
                      <div className="space-y-3 mt-4">
                        {topicData.replacements.map((rep: any, i: number) => (
                          <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span className="text-slate-400 line-through text-sm w-1/3 text-right">{rep.basic}</span>
                            <span className="text-emerald-500">→</span >
                            <span className="text-slate-800 font-bold w-2/3">{rep.advanced}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Logic Chains */}
              {topicData.logic_chains && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <SectionTitle icon={GitMerge} title="高分逻辑链 (Logic Chains)" color={activeTopic.color} />
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {topicData.logic_chains.map((chain: any, i: number) => (
                      <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-slate-800">{chain.title}</h4>
                          <span className="text-xs px-2 py-1 rounded bg-white font-medium shadow-sm" style={{ color: activeTopic.color }}>
                            {chain.masterLabel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mb-4 bg-white px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                          {chain.flow}
                        </p>
                        <div className="space-y-4">
                          {chain.steps.map((step: any, j: number) => (
                            <div key={j} className="flex gap-3 relative group">
                              <div className="flex flex-col items-center">
                                <div className="w-2.5 h-2.5 rounded-full z-10 mt-1.5" style={{ backgroundColor: activeTopic.color }} />
                                {j < chain.steps.length - 1 && (
                                  <div className="w-0.5 h-full opacity-30 mt-1" style={{ backgroundColor: activeTopic.color }} />
                                )}
                              </div>
                              <div className="flex-1 pb-2">
                                <span className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: activeTopic.color }}>
                                  {step.role}
                                </span>
                                <p className="text-sm font-bold text-slate-700">{step.cn}</p>
                                <p className="text-sm text-slate-500 mt-0.5 font-serif italic">{step.en}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentences */}
              {topicData.sentences && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <SectionTitle icon={Quote} title="万能好句 (Example Sentences)" color={activeTopic.color} />
                  <div className="grid gap-4 mt-6">
                    {topicData.sentences.map((sent: any, i: number) => (
                      <div key={i} className="bg-slate-50 p-5 rounded-xl border-l-4 hover:bg-slate-100 transition-colors" style={{ borderLeftColor: activeTopic.color }}>
                        <p className="font-bold text-slate-800 mb-2 leading-relaxed">{sent.en}</p>
                        <p className="text-sm text-slate-500">{sent.cn}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
