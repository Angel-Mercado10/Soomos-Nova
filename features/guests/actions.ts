"use server";

import { z } from "zod";

import { generateConciergeResponse } from "@/features/guests/service";
import { ConciergeActionResult, ConciergeChatMessage } from "@/features/guests/types";

const conciergeMessagesSchema = z.array(
  z.object({
    role: z.string().min(1),
    content: z
      .string()
      .min(1, "La pregunta no puede estar vacía.")
      .max(400, "Intentemos con una pregunta más concreta."),
  })
).min(1, "Necesito contexto de conversación para continuar.");

export const chatWithConcierge = async (
  rawMessages: ConciergeChatMessage[],
  eventSlug: string = "landing"
): Promise<ConciergeActionResult> => {
  const validation = conciergeMessagesSchema.safeParse(rawMessages);

  if (!validation.success) {
    return {
      success: false,
      text: "Necesito una pregunta concreta para asistirle.",
      errorCode: "VALIDATION_ERROR",
    };
  }

  const response = await generateConciergeResponse(validation.data, eventSlug);
  return { success: true, text: response.text };
};