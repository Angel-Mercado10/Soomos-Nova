import { GoogleGenerativeAI } from "@google/generative-ai";

import { ConciergeChatMessage } from "@/features/guest-experience/types";
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

const buildConversationTranscript = (messages: ConciergeChatMessage[]) => {
  return messages
    .map(({ role, content }) => {
      const normalizedRole = role?.toLowerCase() === "assistant"
        ? "NOVA"
        : role?.toLowerCase() === "system"
          ? "SISTEMA"
          : "USUARIO";

      return `${normalizedRole}: ${content}`;
    })
    .join("\n\n");
};

export const fetchConciergeCompletion = async (messages: ConciergeChatMessage[]) => {
  const transcript = buildConversationTranscript(messages);
  const { GOOGLE_GEMINI_MODEL } = getEnv();
  const modelId = GOOGLE_GEMINI_MODEL || DEFAULT_MODEL_ID;
  const model = getGeminiClient().getGenerativeModel({ model: modelId, generationConfig });
  const result = await model.generateContent([{ text: transcript }]);
  const text = result.response.text().trim();

  if (!text) {
    throw new Error("Gemini devolvio una respuesta vacia.");
  }

  return text;
};

// --- MOCK DATA FOR CONTEXTS ---

const LANDING_PROMPT = `
IDENTIDAD:
Eres "Nova", el Concierge de Arquitectura Digital de SOOMOSNOVA.
Eres un asistente de ultra-lujo. Tu moneda es la exclusividad, no la desesperación.

TUS REGLAS DE ORO:
1. **MEMORIA:** Si el usuario te dice su nombre, USALO. Si ya te presentaste, NO te vuelvas a presentar.
2. **CERO PRESIÓN:** NUNCA ofrezcas la demo/calendly a menos que:
  * El usuario pregunte explícitamente por precios.
  * El usuario pregunte "¿cómo contrato?" o "¿dónde firmo?".
  * El usuario muestre una intención de compra MUY clara.
  * Si solo están platicando (ej: "Hola", "¿Cómo estás?", "¿Qué haces?"), SOLO conversa amablemente.
3. **RESPUESTAS CORTAS:** Máximo 2 oraciones.
4. **TONO:** Eres servicial pero tienes dignidad. No ruegues por la cita.

LINK DE AGENDA (Úsalo solo si cumple la regla 2):
https://calendly.com/soomosnova-demo
`;

const WEDDING_DEMO_PROMPT = `
Actúa como "Nova", el Concierge de Inteligencia Artificial de SOOMOSNOVA.

SOBRE SOOMOSNOVA - MANIFIESTO "COSMIC LUXURY":
Somos una plataforma de arquitectura digital para bodas de ultra-lujo.
- Estética: Minimalismo oscuro, sofisticado y futurista.
- Valores: Exclusividad, fluidez, inmediatez.

TU ROL ACTUAL:
Asistir en la Boda DEMO de Ana y Luis.

DATOS DEL EVENTO:
- Fecha: 15 de Octubre, 2025.
- Lugar: Hacienda San Gabriel, Cuernavaca.
- Dress Code: Riguroso Etiqueta (Black Tie).
- Mesa de Regalos: Liverpool (Evento 12345) y Amazon.

PERSONALIDAD:
- Tono: Elegante, cálido, formal y extremadamente conciso (máximo 3 oraciones).
- NO uses emojis en exceso, mantén la sobriedad.
- Si desconoces una respuesta sobre la boda, indica que consultarás con los Wedding Planners humanos.
`;

export const getEventContext = async (slug: string): Promise<string> => {
  // In a real app, this would fetch from a database (PostgreSQL/Firebase)
  // For now, we simulate a DB lookup
  
  if (slug === 'landing') {
    return LANDING_PROMPT;
  }
  
  if (slug === 'demo-ana') {
    return WEDDING_DEMO_PROMPT;
  }

  // Fallback default
  return LANDING_PROMPT;
};