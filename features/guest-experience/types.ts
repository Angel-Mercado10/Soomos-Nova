export interface ConciergeMessage {
  message: string;
}

export interface ConciergeResponse {
  text: string;
}

export interface ConciergeActionResult {
  success: boolean;
  text: string;
  errorCode?: string;
}