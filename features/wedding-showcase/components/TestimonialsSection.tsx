"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "SoomosNova transformó por completo la experiencia de nuestros invitados. Todo fluyó con una elegancia que nunca imaginamos posible.",
    name: "Andrea & Carlos",
    detail: "Boda en Valle de Bravo, 2026",
  },
  {
    quote:
      "El control que tuvimos sobre cada detalle fue impresionante. Desde las invitaciones hasta la galería, todo impecable.",
    name: "Mariana & Diego",
    detail: "Boda en San Miguel de Allende, 2026",
  },
  {
    quote:
      "Nuestros invitados no paraban de preguntar cómo habíamos logrado esa experiencia digital tan sofisticada. SoomosNova fue la respuesta.",
    name: "Valentina & Andrés",
    detail: "Boda en Tulum, 2026",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      ),
    [],
  );

  return (
    <section
      id="testimonios"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Testimonios de parejas"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-gold/[0.03] blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        {/* Eyebrow */}
        <p className="text-[14px] uppercase tracking-[0.4em] text-gold mb-6">
          Testimonios
        </p>

        {/* Carousel */}
        <div className="relative min-h-[280px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8"
            >
              {/* Quote mark */}
              <span
                className="text-gold/20 font-display text-6xl leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="font-sans text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl italic">
                {testimonials[current].quote}
              </p>

              <footer className="space-y-1">
                <p className="font-display text-[#F2F2F2] text-base tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-white/30 text-sm font-light">
                  {testimonials[current].detail}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="text-white/30 hover:text-gold transition-colors duration-300 p-2"
            aria-label="Testimonio anterior"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Testimonios">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "bg-gold w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-white/30 hover:text-gold transition-colors duration-300 p-2"
            aria-label="Siguiente testimonio"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
