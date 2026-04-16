import { GoogleGenAI, Type, Schema, ThinkingLevel } from '@google/genai';
import { 
  collection, 
  query, 
  getDocs, 
  addDoc, 
  limit,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { db } from '../lib/firebase';

import { CAMBRIDGE_SENTENCES } from '../data/sentences';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface GrammarNode {
  id: string;
  label: string; // e.g., "Subject", "Predicate", "Object", "Adverbial Clause"
  text: string; // The actual words
  children?: GrammarNode[];
}

export interface VocabularyItem {
  word: string;
  meaning: string;
  pos: string; // Part of speech
}

export interface SentenceAnalysis {
  text: string;
  translation: string;
  grammarTree: GrammarNode;
  vocabulary: VocabularyItem[];
  explanation: string[];
  source?: string;
}

export async function analyzeSentence(sentence: string): Promise<SentenceAnalysis> {
  const prompt = `
You are an expert IELTS English teacher. Analyze the following long and complex sentence.
Sentence: "${sentence}"

Provide a detailed analysis in JSON format with the following structure:
{
  "text": "The original sentence",
  "translation": "准确且自然的中文翻译",
  "grammarTree": {
    "id": "root",
    "label": "句子结构",
    "text": "完整句子",
    "children": [
      {
        "id": "node-1",
        "label": "主语",
        "text": "...",
        "children": [...] 
      },
      {
        "id": "node-2",
        "label": "谓语",
        "text": "..."
      }
    ]
  },
  "vocabulary": [
    { "word": "...", "meaning": "中文释义", "pos": "词性(如: 名词/动词等)" }
  ],
  "explanation": [
    "步骤 1: 识别主句...",
    "步骤 2: 分析从句..."
  ]
}

重要要求：
1. 所有的解析内容（explanation）、单词释义（meaning）、语法标签（label）必须使用中文。
2. 语法树（grammarTree）必须逻辑严密，清晰展示主谓宾、定状补及各类从句。
3. 确保返回的是纯净的 JSON 格式。
`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW }
    }
  });

  let text = response.text;
  if (!text) throw new Error("Failed to generate analysis");
  
  // Clean up markdown block if present
  text = text.replace(/^```json\\n?/, '').replace(/\\n?```$/, '').trim();
  
  return JSON.parse(text) as SentenceAnalysis;
}

export async function getRandomAnalyzedSentence(): Promise<SentenceAnalysis> {
  const randomItem = CAMBRIDGE_SENTENCES[Math.floor(Math.random() * CAMBRIDGE_SENTENCES.length)];

  // 1. Try to fetch this specific sentence from Firestore
  try {
    const sentencesRef = collection(db, 'sentences');
    const q = query(sentencesRef, where('text', '==', randomItem.text), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data() as SentenceAnalysis;
    }
  } catch (cacheError) {
    console.warn("Cache fetch failed, falling back to AI:", cacheError);
  }

  // 2. If not cached, analyze it using the standard analysis function
  const analysis = await analyzeSentence(randomItem.text);
  analysis.source = randomItem.source;

  // 3. Save to Firestore with the specific Cambridge IELTS source tag
  try {
    await addDoc(collection(db, 'sentences'), {
      ...analysis,
      topic: 'Cambridge IELTS',
      source: randomItem.source, // Uses tracking tag like [剑14-Test1-Passage1]
      authorId: 'system',
      createdAt: serverTimestamp(),
      isSystemGenerated: true
    });
  } catch (saveError) {
    console.error("Failed to cache analysis:", saveError);
  }

  return analysis;
}
