"use server";

import { z } from "zod";

import { generateConciergeResponse } from "@/features/guest-experience/service";
import { ConciergeActionResult } from "@/features/guest-experience/types";

const conciergeMessageSchema = z.object({
  message: z
    .string({ required_error: "Necesito una pregunta para continuar." })
    .min(1, "La pregunta no puede estar vacía.")
    .max(400, "Intentemos con una pregunta más concreta."),
});

export const chatWithConcierge = async (rawMessage: string): Promise<ConciergeActionResult> => {
  const validation = conciergeMessageSchema.safeParse({ message: rawMessage?.trim() ?? "" });

  if (!validation.success) {
    return {
      success: false,
      text: "Necesito una pregunta concreta para asistirle.",
      errorCode: "VALIDATION_ERROR",
    };
  }

  const response = await generateConciergeResponse(validation.data.message);
  return { success: true, text: response.text };
};