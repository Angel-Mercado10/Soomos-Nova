const houses = [
  { name: "Vogue Weddings", tag: "Featured", accent: "text-gold" },
  { name: "Harper's Bazaar", tag: "Editorial", accent: "text-white" },
  { name: "The Lane", tag: "Curated", accent: "text-white/80" },
  { name: "WedLuxe", tag: "Partnership", accent: "text-white" },
];

const stats = [
  { label: "Eventos Ultralujo", value: "+120", detail: "Desde 2018" },
  { label: "Tiempo de Respuesta", value: "2.3s", detail: "Concierge IA" },
  { label: "Personalizacion", value: "100%", detail: "Arte generativo" },
];

export const SocialProof = () => {
  return (
    <section id="experiencia" className="bg-surface/80 border-y border-white/5 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),_transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Respaldado por la alta costura digital</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Confianza de curadores globales</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {houses.map((house) => (
            <div key={house.name} className="p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">{house.tag}</p>
              <p className={`font-serif text-xl ${house.accent}`}>{house.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 border border-gold/20 rounded-3xl bg-black/30">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
              <p className="text-4xl font-serif text-gold py-4">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};