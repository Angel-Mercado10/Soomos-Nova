import { FadeInView } from "@/shared/ui/FadeInView";

const pillars = [
  {
    title: "Privacidad Absoluta",
    description:
      "Cifrado de extremo a extremo. Cada momento íntimo permanece protegido bajo estándares bancarios de seguridad.",
  },
  {
    title: "Exclusividad Real",
    description:
      "Solo 12 bodas por año. Cada proyecto recibe dedicación artesanal y atención sin precedentes.",
  },
  {
    title: "Ingeniería Invisible",
    description:
      "Infraestructura enterprise sobre Google Cloud. Rendimiento impecable sin que tus invitados noten la tecnología.",
  },
];

const infrastructure = [
  "Google Cloud Platform",
  "Vercel Enterprise",
  "Gemini AI",
  "Firebase Security",
];

export const TechAuthority = () => {
  return (
    <section
      id="experiencia"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Nuestra promesa de confianza"
    >
      {/* Subtle ambient */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/[0.02] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center space-y-5 mb-20">
          <FadeInView>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Nuestra Promesa
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight">
              Confianza Construida{" "}
              <br className="hidden md:block" />
              <span className="text-white/40">con Precisión</span>
            </h2>
          </FadeInView>
        </div>

        {/* Trust Pillars — Glass dark panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <FadeInView key={pillar.title} delay={0.15 + idx * 0.1}>
              <article className="group relative p-10 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-gold/20 transition-all duration-500 hover:-translate-y-1">
                {/* Gold top accent */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="space-y-5">
                  <h3 className="font-display text-xl text-[#F2F2F2] tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>

        {/* Infrastructure Bar */}
        <FadeInView>
          <div className="border-t border-white/[0.06] pt-16">
            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-white/25 mb-10">
              Infraestructura
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {infrastructure.map((name) => (
                <span
                  key={name}
                  className="text-sm text-white/25 font-light tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};
