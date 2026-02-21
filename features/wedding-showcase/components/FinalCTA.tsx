import { FadeInView } from "@/shared/ui/FadeInView";

export const FinalCTA = () => {
  return (
    <section
      id="acceso"
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Contactar concierge"
    >
      {/* Gold ambient glow */}
      <div
        className="absolute inset-0 bg-gold/[0.03] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.06] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Top border — gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <FadeInView>
          <p className="text-[14px] uppercase tracking-[0.4em] text-gold mb-6">
            Siguiente Paso
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight mb-8">
            Tu boda merece
            <br />
            control absoluto.
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-white/40 text-lg leading-relaxed font-light max-w-md mx-auto mb-12">
            Conversemos sobre tu evento. Sin compromiso, sin formularios
            interminables. Solo una conversación privada.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <a
            href="https://wa.me/5559958257?text=Hola%2C%20me%20interesa%20una%20demostraci%C3%B3n%20privada%20de%20SoomosNova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-gold text-[#080808] font-semibold text-[14px] uppercase tracking-[0.25em] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            aria-label="Hablar con Concierge Nova por WhatsApp"
          >
            Hablar con Concierge Nova
          </a>
        </FadeInView>
      </div>
    </section>
  );
};
