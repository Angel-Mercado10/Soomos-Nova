import { GoogleGenerativeAI } from "@google/generative-ai";

import { getEnv } from "@/shared/lib/env";

const DEFAULT_MODEL_ID = "gemini-2.5-flash";
const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 1024,
};

let cachedClient: GoogleGenerativeAI | null = null;

const getGeminiClient = () => {
  if (!cachedClient) {
    const { GOOGLE_API_KEY } = getEnv();
    cachedClient = new GoogleGenerativeAI(GOOGLE_API_KEY);
  }

  return cachedClient;
};

export const fetchConciergeCompletion = async (prompt: string) => {
  const { GOOGLE_GEMINI_MODEL } = getEnv();
  const modelId = GOOGLE_GEMINI_MODEL || DEFAULT_MODEL_ID;
  const model = getGeminiClient().getGenerativeModel({ model: modelId, generationConfig });
  const result = await model.generateContent([{ text: prompt }]);
  const text = result.response.text().trim();

  if (!text) {
    throw new Error("Gemini devolvio una respuesta vacia.");
  }

  return text;
};