import { GoogleGenAI, Type, Schema, ThinkingLevel } from '@google/genai';
import { 
  collection, 
  query, 
  getDocs, 
  addDoc, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';

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
  const topics = [
    "environmental protection", "space exploration", "ancient history", "modern technology",
    "psychology and behavior", "economics and trade", "biology and genetics", "architecture",
    "linguistics", "sociology", "medical advancements", "climate change", "artificial intelligence",
    "education systems", "urban planning", "marine biology", "renewable energy", "cultural heritage"
  ];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  // 1. Try to fetch a pre-analyzed sentence from Firestore to eliminate AI wait time
  try {
    const sentencesRef = collection(db, 'sentences');
    // We use a simple random selection by fetching a small batch and picking one
    // In a real high-scale app, we'd use a random index or ID
    const q = query(sentencesRef, limit(40));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const docs = querySnapshot.docs;
      const randomDoc = docs[Math.floor(Math.random() * docs.length)];
      const data = randomDoc.data();
      return {
        text: data.text,
        translation: data.translation,
        grammarTree: data.grammarTree,
        vocabulary: data.vocabulary,
        explanation: data.explanation
      } as SentenceAnalysis;
    }
  } catch (cacheError) {
    console.warn("Cache fetch failed, falling back to AI:", cacheError);
  }

  // 2. Fallback to AI if no cache or error
  const prompt = `
You are an expert IELTS English teacher. 
First, generate a random, highly complex, and difficult long sentence typical of Cambridge IELTS Reading passages (Bands 7.5 - 9.0) about the topic: ${randomTopic}.
Then, provide a detailed analysis of that sentence in JSON format with the following structure:
{
  "text": "The generated sentence",
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
    { "word": "...", "meaning": "中文释义", "pos": "词性" }
  ],
  "explanation": [
    "步骤 1: ...",
    "步骤 2: ..."
  ]
}

重要要求：
1. 所有的解析内容、单词释义、语法标签必须使用中文。
2. 语法树必须逻辑严密，清晰展示主谓宾、定状补及各类从句。
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
  text = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
  const analysis = JSON.parse(text) as SentenceAnalysis;

  // 3. Background: Save the newly generated analysis to Firestore for future "instant" use
  try {
    addDoc(collection(db, 'sentences'), {
      ...analysis,
      topic: randomTopic,
      source: `AI Generated - ${randomTopic}`,
      authorId: 'system', // Use 'system' for AI generated ones
      createdAt: serverTimestamp(),
      isSystemGenerated: true
    });
  } catch (saveError) {
    console.error("Failed to cache analysis:", saveError);
  }

  return analysis;
}
