interface FeatureCard {
  title: string;
  description: string;
  tag: string;
}

const features: FeatureCard[] = [
  {
    title: "Atlas Inmersivo",
    description: "Gemelos digitales del venue con rutas guiadas, iluminación reactiva y audio espacial personalizado.",
    tag: "Realidad sensorial",
  },
  {
    title: "Memorias Cinematicas",
    description: "Narrativas generadas por IA que mezclan video, sonido binaural y cartas holograficas para cada invitado.",
    tag: "Storyliving",
  },
  {
    title: "Oraculo de Hospitalidad",
    description: "Concierge predictivo que anticipa deseos y coordina staff humano en tiempo real.",
    tag: "IA asistida",
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="membresia" className="bg-void py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Arquitectura viva</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Membresia Nova Signature</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Cada feature se desarrolla como una casa de alta costura digital. Seleccionamos solo 12 bodas por año para garantizar impecabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article key={feature.title} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/5 to-transparent blur-3xl opacity-0 hover:opacity-40 transition-opacity" />
              <div className="relative space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">{feature.tag}</span>
                <h3 className="font-serif text-2xl text-white">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                <div className="pt-6">
                  <button className="text-gold text-xs tracking-[0.3em] uppercase border-b border-gold/40 pb-1">
                    Agendar demostracion
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};