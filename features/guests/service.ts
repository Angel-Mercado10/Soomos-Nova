import { fetchConciergeCompletion, getEventContext } from "@/features/guests/repository";
import { ConciergeChatMessage, ConciergeResponse } from "@/features/guests/types";

const FALLBACK_MESSAGE =
  "Disculpe, mi señal se cruzó. ¿Podría reformular?";

const buildConversation = (systemContext: string, messages: ConciergeChatMessage[]): ConciergeChatMessage[] => {
  const normalizedMessages = messages
    .filter((message) => message?.content?.trim())
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }));

  return [
    {
      role: "system",
      content: `${systemContext}\n\nHISTORIAL RECIENTE: Conversación continua; no te presentes de nuevo.\nMEMORIA RELEVANTE: el usuario se llama Ángel.`,
    },
    ...normalizedMessages,
  ];
};

export const generateConciergeResponse = async (
  messages: ConciergeChatMessage[],
  eventSlug: string = "landing"
): Promise<ConciergeResponse> => {
  try {
    const systemContext = await getEventContext(eventSlug);
    const conversation = buildConversation(systemContext, messages);
    const text = await fetchConciergeCompletion(conversation);

    return { text };
  } catch (error) {
    console.error("Error al consultar Gemini", error);
    return { text: FALLBACK_MESSAGE };
  }
};