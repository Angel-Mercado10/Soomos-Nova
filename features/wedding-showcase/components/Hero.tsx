"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 overflow-hidden bg-[#080808]"
      aria-label="Presentación principal"
    >
      {/* Ambient gold glow — layered for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.06] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold/[0.03] blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Exclusivity badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block border border-gold/20 px-6 py-2 text-gold text-[14px] tracking-[0.35em] font-sans font-medium uppercase">
            SoomosNova
          </span>
        </motion.div>

        {/* Headline — Emotional: Control + Elegance */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.08] tracking-tight text-[#F2F2F2]"
        >
          Control total de invitados
          <br />
          <em className="not-italic text-transparent bg-clip-text bg-gradient-gold">
            para una boda impecable.
          </em>
        </motion.h1>

        {/* Subheadline — Clear value proposition */}
        <motion.p
          {...fadeUp(0.3)}
          className="font-sans text-white/45 text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
        >
          Invitaciones digitales, confirmaciones, acceso QR y galería privada en
          una sola experiencia premium.
        </motion.p>

        {/* CTAs — Conversion focused */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col items-center gap-6 pt-6"
        >
          <a
            href="https://wa.me/5559958257?text=Hola%2C%20estoy%20interesado%20en%20conocer%20el%20sistema%20de%20gesti%C3%B3n%20digital%20de%20invitados%20de%20Soomos%20Nova%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20privada."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-gold text-[#080808] font-semibold text-[14px] uppercase tracking-[0.25em] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            aria-label="Chatear por WhatsApp"
          >
            Chatea por WhatsApp
          </a>

          {/* Scroll nudge */}
          <p className="text-sm text-white/25 font-light tracking-widest uppercase">
            Descubre más ↓
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
};