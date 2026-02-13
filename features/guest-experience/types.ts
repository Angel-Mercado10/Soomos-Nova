export interface ConciergeMessage {
  message: string;
}

export interface ConciergeResponse {
  text: string;
}

export interface ConciergeChatMessage {
  role: string;
  content: string;
}

export interface ConciergeActionResult {
  success: boolean;
  text: string;
  errorCode?: string;
}

export interface WeddingContext {
  id: string;
  slug: string;
  type: 'landing' | 'wedding';
  aiPersonality: string; // The system prompt
  // Metadata for future use
  coupleName?: string;
  venue?: string;
  date?: string;
}