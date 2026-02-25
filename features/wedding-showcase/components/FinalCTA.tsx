import { FadeInView } from "@/shared/ui/FadeInView";

export const FinalCTA = () => {
  return (
    <section
      id="acceso"
      className="relative py-24 md:py-32 overflow-hidden bg-[#101214]"
      aria-label="Llamada final a la acción"
    >
      <div
        className="absolute inset-0 bg-white/[0.02] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <FadeInView>
          <p className="text-[12px] uppercase tracking-[0.3em] text-white/45 mb-6">
            Acción Final
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl text-[#f5f5f7] font-light leading-tight mb-8">
            Una sola conversación
            <br />
            puede cambiar todo.
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl mx-auto mb-12">
            Escríbenos por WhatsApp y te mostramos cómo elevar la gestión de
            invitados con una experiencia verdaderamente premium.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <a
            href="https://wa.me/5559958257?text=Hola%2C%20me%20interesa%20una%20demostraci%C3%B3n%20privada%20de%20SoomosNova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-11 py-4 rounded-full bg-white text-[#101214] font-medium text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#e8e8e8] hover:-translate-y-[1px]"
            aria-label="Chatear por WhatsApp"
          >
            Chatea por WhatsApp
          </a>
        </FadeInView>
      </div>
    </section>
  );
};
