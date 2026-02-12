"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatWithConcierge } from "@/features/guest-experience/actions";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

export const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: "Bienvenido. Soy Nova, su concierge personal. ¿En qué puedo asistirle hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      const response = await chatWithConcierge(userMsg.text);
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
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-white/20"
      >
        <span className="material-symbols-outlined text-void text-3xl">
          {isOpen ? "close" : "smart_toy"}
        </span>
      </motion.button>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] bg-void/90 backdrop-blur-xl border border-gold/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-gold font-serif text-lg tracking-wide">Concierge AI</h3>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white/10 text-white rounded-br-none"
                        : "bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Pregunta sobre el evento..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-gray-600"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center text-gold transition-colors border border-gold/30"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};