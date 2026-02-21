import { FadeInView } from "@/shared/ui/FadeInView";

interface MembershipTier {
  title: string;
  description: string;
  tag: string;
  cta: string;
}

const tiers: MembershipTier[] = [
  {
    title: "Atlas Inmersivo",
    description:
      "Gemelos digitales del venue con rutas guiadas, iluminación reactiva y audio espacial personalizado para cada invitado.",
    tag: "Realidad Sensorial",
    cta: "Solicitar Información",
  },
  {
    title: "Memorias Cinemáticas",
    description:
      "Narrativas generadas que entrelazan video, sonido binaural y cartas personalizadas. Un recuerdo vivo, no un archivo.",
    tag: "Storyliving",
    cta: "Agendar Demostración",
  },
  {
    title: "Oráculo de Hospitalidad",
    description:
      "Concierge predictivo que anticipa necesidades y coordina el staff en tiempo real. Hospitalidad invisible, siempre presente.",
    tag: "Inteligencia Asistida",
    cta: "Conocer Más",
  },
];

export const FeaturesGrid = () => {
  return (
    <section
      id="membresía"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Membresía Nova Signature"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center space-y-5 mb-20">
          <FadeInView>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Arquitectura Viva
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light">
              Membresía Nova Signature
            </h2>
          </FadeInView>
          <FadeInView delay={0.15}>
            <p className="text-white/40 max-w-xl mx-auto text-base leading-relaxed font-light">
              Cada experiencia se diseña como una pieza de alta costura digital.
              Solo 12 bodas por año para garantizar impecabilidad absoluta.
            </p>
          </FadeInView>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => (
            <FadeInView key={tier.title} delay={0.1 + idx * 0.12}>
              <article className="group relative flex flex-col p-10 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <div className="flex flex-col flex-1 gap-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                    {tier.tag}
                  </span>

                  <h3 className="font-display text-2xl text-[#F2F2F2]">
                    {tier.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed font-light flex-1">
                    {tier.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#acceso"
                      className="inline-block text-gold text-[11px] tracking-[0.2em] uppercase border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300"
                      aria-label={`${tier.cta} — ${tier.title}`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};