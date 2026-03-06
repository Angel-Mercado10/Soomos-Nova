"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatWithConcierge } from "@/features/guests/actions";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: "1", role: "bot", text: "Bienvenido. Soy Nova, su concierge personal. ¿En qué puedo asistirle hoy?" },
];

export const ChatInterface = ({ eventSlug = 'landing' }: { eventSlug?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const storageKey = `soomosnova-chat:${eventSlug}`;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        setMessages(INITIAL_MESSAGES);
        return;
      }

      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed);
        return;
      }

      setMessages(INITIAL_MESSAGES);
    } catch (error) {
      console.error("Error al restaurar historial del chat", error);
      setMessages(INITIAL_MESSAGES);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (error) {
      console.error("Error al persistir historial del chat", error);
    }
  }, [messages, storageKey]);

  // Auto-scroll al nuevo mensaje
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationMessages = [...messages, userMsg].map((message) => ({
        role: message.role === "bot" ? "assistant" : "user",
        content: message.text,
      }));

      const response = await chatWithConcierge(conversationMessages, eventSlug);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response.text || "Disculpe, hubo un error de conexión.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botón Flotante (Launcher) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-white/20"
      >
        <span className="material-symbols-outlined text-[#080808] text-3xl">
          {isOpen ? "close" : "smart_toy"}
        </span>
      </motion.button>

      {/* Ventana de Chat - Cosmic Luxury */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] bg-[#080808]/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-[#121212]/50 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] animate-pulse" />
              <h3 className="text-[#D4AF37] font-serif text-lg tracking-wide uppercase">Concierge Nova</h3>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-sm leading-relaxed backdrop-blur-sm ${
                      msg.role === "user"
                        ? "bg-[#F2F2F2]/10 text-[#F2F2F2] rounded-2xl rounded-br-sm border border-white/5"
                        : "bg-gradient-to-br from-[#121212] to-[#080808] border border-[#D4AF37]/20 text-[#F2F2F2]/90 rounded-2xl rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#121212] border border-[#D4AF37]/20 p-4 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-[bounce_1s_infinite_0ms]" />
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-[bounce_1s_infinite_200ms]" />
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-[bounce_1s_infinite_400ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-[#D4AF37]/10 bg-[#121212] backdrop-blur-xl">
              <div className="flex gap-3 items-center bg-[#080808] border border-[#D4AF37]/20 rounded-xl p-1 pr-2 shadow-inner">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escriba su consulta..."
                  className="flex-1 bg-transparent border-none px-4 py-3 text-sm text-[#F2F2F2] focus:outline-none focus:ring-0 placeholder:text-[#F2F2F2]/30 font-light"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-lg bg-[#D4AF37] hover:bg-[#C5A028] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-[#080808] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  <span className="material-symbols-outlined text-xl">arrow_upward</span>
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-[#F2F2F2]/20 tracking-widest uppercase">Powered by SoomosNova AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};