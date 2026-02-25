import { FadeInView } from "@/shared/ui/FadeInView";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: "Invitaciones Digitales",
    description:
      "Diseño personalizado para cada invitado con confirmación directa integrada.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Control de Acceso QR",
    description:
      "Código único e intransferible por invitado. Validación profesional al instante.",
    icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
  },
  {
    title: "Galería Privada",
    description:
      "Todas las fotos de tu evento en un solo lugar, protegidas y organizadas.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Panel en Tiempo Real",
    description:
      "Confirmaciones, asistencia y métricas de tu evento actualizadas al instante.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="beneficios"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Beneficios de la plataforma"
    >
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/[0.02] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <FadeInView>
            <p className="text-[14px] uppercase tracking-[0.4em] text-gold">
              Beneficios
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight">
              Todo lo que necesitas.
              <br />
              <span className="text-white/40">Nada que sobre.</span>
            </h2>
          </FadeInView>
        </div>

        {/* Grid — 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <FadeInView key={benefit.title} delay={0.1 + idx * 0.08}>
              <article className="group relative flex flex-col items-center text-center p-8 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Gold top accent */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-gold/20 rounded-full group-hover:border-gold/40 transition-colors duration-300">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold"
                    aria-hidden="true"
                  >
                    <path d={benefit.icon} />
                  </svg>
                </div>

                <h3 className="font-display text-lg text-[#F2F2F2] tracking-wide mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {benefit.description}
                </p>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};
