import { z } from "zod";

const envSchema = z.object({
  GOOGLE_API_KEY: z.string().min(1, "Debes definir GOOGLE_API_KEY en tu archivo de entorno."),
  GOOGLE_GEMINI_MODEL: z.string().min(1).optional(),
});

type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

export const getEnv = () => {
  if (cachedEnv) {
    return cachedEnv;
  }

  const parsed = envSchema.safeParse({
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_GEMINI_MODEL: process.env.GOOGLE_GEMINI_MODEL,
  });

  if (!parsed.success) {
    const messages = parsed.error.errors.map((issue) => issue.message).join(" \n");
    throw new Error(`Configuracion de entorno invalida:\n${messages}`);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
};