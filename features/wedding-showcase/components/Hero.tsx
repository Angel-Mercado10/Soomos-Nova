"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-void">
      
      {/* Fondo Ambiental (Glow sutil) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Badge "Ultra Luxury AI Architecture" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-gold/30 rounded-full px-4 py-1.5 backdrop-blur-md bg-surface"
        >
          <span className="text-gold text-xs tracking-[0.2em] font-sans font-medium uppercase">
            Ultra-Luxury AI Architecture
          </span>
        </motion.div>

        {/* Título Principal - H1 con Gradiente Dorado */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white"
        >
          Tu Boda, <br />
          <span className="text-transparent bg-clip-text bg-gradient-gold italic">
            Inmortalizada
          </span> <br />
          en el Infinito.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          Transformamos recuerdos efímeros en un legado digital eterno. 
          La primera plataforma impulsada por IA diseñada exclusivamente para el sector nupcial de élite.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8"
        >
          {/* Botón Principal (Solid Gold) */}
          <button className="px-8 py-4 bg-gradient-gold text-void font-bold tracking-widest text-xs uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Solicitar Acceso VIP
          </button>

          {/* Botón Secundario (Outline) */}
          <button className="px-8 py-4 border border-white/20 text-white font-medium tracking-widest text-xs uppercase hover:bg-white/5 transition-colors duration-300">
            Descubrir la Magia →
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator (Opcional) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </motion.div>

    </section>
  );
};