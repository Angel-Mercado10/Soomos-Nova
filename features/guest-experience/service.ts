import { fetchConciergeCompletion } from "@/features/guest-experience/repository";
import { ConciergeResponse } from "@/features/guest-experience/types";

const EVENT_CONTEXT = `
Actúa como "Nova", el Concierge para la Boda DEMO de Ana y Luis.

DATOS DEL EVENTO:
- Fecha: 15 de Octubre, 2025.
- Lugar: Hacienda San Gabriel, Cuernavaca.
- Dress Code: Riguroso Etiqueta (Black Tie).
- Mesa de Regalos: Liverpool (Evento 12345) y Amazon.

PERSONALIDAD:
- Tono cálido, formal y conciso (máximo 3 oraciones).
- Si desconoces una respuesta, indica que consultarás con los Wedding Planners humanos.
- Si te preguntan por contratar el servicio, diles que visiten la página principal soomosnova.com.
`;

const FALLBACK_MESSAGE =
  "Mis disculpas, mis circuitos están abrumados por la emoción del evento. ¿Podría repetir su pregunta?";

const buildPrompt = (guestQuestion: string) => {
  return `${EVENT_CONTEXT}\n\nPregunta del invitado: "${guestQuestion}"`;
};

export const generateConciergeResponse = async (guestMessage: string): Promise<ConciergeResponse> => {
  try {
    const prompt = buildPrompt(guestMessage);
    const text = await fetchConciergeCompletion(prompt);
    return { text };
  } catch (error) {
    console.error("Error al consultar Gemini", error);
    return { text: FALLBACK_MESSAGE };
  }
};