"use client";

import { motion } from "framer-motion";

const houses = [
  { name: "Vogue Weddings", tag: "Featured", href: "#" },
  { name: "Harper's Bazaar", tag: "Editorial", href: "#" },
  { name: "The Lane", tag: "Curated", href: "#" },
  { name: "WedLuxe", tag: "Partnership", href: "#" },
];

const stats = [
  { label: "Eventos Ultralujo", value: "+50", detail: "Desde 2026" },
  { label: "Tiempo de Respuesta", value: "2.3s", detail: "Concierge IA" },
  { label: "Personalización", value: "100%", detail: "Arte generativo" },
];

export const SocialProof = () => {
  return (
    <section className="bg-[#080808] py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* Header Section */}
        <div className="text-center space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#D4AF37]"
          >
            Respaldado por la alta costura digital
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-[#F2F2F2] font-light"
          >
            Confianza de curadores globales
          </motion.h2>
        </div>

        {/* Media Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {houses.map((house, idx) => (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 border border-white/5 hover:border-[#D4AF37]/20 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-500 cursor-default flex flex-col items-center justify-center text-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-[#D4AF37] transition-colors">{house.tag}</span>
              <h3 className="font-serif text-xl md:text-2xl text-[#F2F2F2] group-hover:text-white transition-colors">{house.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Stats Section with Divider */}
        <div className="border-t border-white/5 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="space-y-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
                <div className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#AA8C2C] py-2">
                  {stat.value}
                </div>
                <p className="text-sm text-[#F2F2F2]/60 font-light">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};