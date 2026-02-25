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
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 overflow-hidden bg-[#080808]"
      aria-label="Presentación principal"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[320px] bg-gold/[0.06] blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-10">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block border border-white/15 px-6 py-2 text-white/55 text-[12px] tracking-[0.3em] font-sans font-medium uppercase">
            SoomosNova
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display text-5xl md:text-7xl lg:text-[5.2rem] leading-[1.05] tracking-tight text-[#f2f2f2]"
        >
          Invitados confirmados.
          <br />
          <em className="not-italic text-white/55">
            Acceso bajo control.
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="font-sans text-white/60 text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
        >
          Elimina el caos operativo y coordina tu boda con precisión: invitación
          digital, confirmaciones y control de acceso en un solo sistema.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <a
            href="https://wa.me/5559958257?text=Hola%2C%20estoy%20interesado%20en%20conocer%20el%20sistema%20de%20gesti%C3%B3n%20digital%20de%20invitados%20de%20Soomos%20Nova%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20privada."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-white text-[#111111] font-medium text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#e9e9e9] hover:-translate-y-[1px]"
            aria-label="Chatear por WhatsApp"
          >
            Chatea por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};