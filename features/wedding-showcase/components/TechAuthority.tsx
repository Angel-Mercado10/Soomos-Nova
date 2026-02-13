"use client";

import { motion } from "framer-motion";

const techPartners = [
  "Google Cloud Platform",
  "Vercel Enterprise",
  "Gemini AI Models",
  "Firebase Security",
];

const stats = [
  { label: "Eventos Ultralujo", value: "+50", detail: "Desde 2026" },
  { label: "Tiempo de Respuesta", value: "2.3s", detail: "Concierge IA" },
  { label: "Personalización", value: "100%", detail: "Arte generativo" },
];

export const TechAuthority = () => {
  return (
    <section className="bg-[#080808] py-24 md:py-32 relative overflow-hidden border-t border-white/5">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Infrastructure (Tech Real) */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Infraestructura</p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F2F2F2] leading-tight">
                Potencia Invisible. <br />
                <span className="text-white/50">Seguridad Blindada.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techPartners.map((partner, idx) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-4 border-l border-[#D4AF37]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[#F2F2F2]/90 font-sans text-sm tracking-wide">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Business Metrics (Datos Reales) */}
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="group relative p-8 border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl bg-[#121212]/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
                    <p className="font-serif text-5xl text-[#D4AF37] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                      {stat.value}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#F2F2F2]/60 font-light border-l border-white/10 pl-4">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
