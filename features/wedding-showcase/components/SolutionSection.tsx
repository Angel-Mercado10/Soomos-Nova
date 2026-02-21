import { FadeInView } from "@/shared/ui/FadeInView";

interface SolutionFeature {
  title: string;
  description: string;
}

const features: SolutionFeature[] = [
  {
    title: "Invitación Digital Personalizada",
    description:
      "Cada invitado recibe una pieza única, diseñada a medida, con confirmación directa e integrada.",
  },
  {
    title: "Registro Inteligente de Invitados",
    description:
      "Panel privado con estado de confirmación en tiempo real. Sin hojas de cálculo, sin caos.",
  },
  {
    title: "QR Individual con Validación",
    description:
      "Acceso controlado al venue. Cada código es único, intransferible y verificado al instante.",
  },
  {
    title: "Galería Privada en Vivo",
    description:
      "Todas las fotos de tus invitados en un solo lugar, protegidas y curadas automáticamente.",
  },
];

export const SolutionSection = () => {
  return (
    <section
      id="experiencia"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Nuestra solución"
    >
      {/* Subtle ambient */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/[0.02] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <FadeInView>
            <p className="text-[14px] uppercase tracking-[0.4em] text-gold">
              La Solución
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight">
              Control Invisible.
              <br />
              <span className="text-white/40">Experiencia Impecable.</span>
            </h2>
          </FadeInView>
        </div>

        {/* Feature Grid — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FadeInView key={feature.title} delay={0.12 + idx * 0.08}>
              <article className="group relative p-10 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Gold top accent */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="space-y-4">
                  <h3 className="font-display text-xl text-[#F2F2F2] tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};
