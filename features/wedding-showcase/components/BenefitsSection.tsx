import { FadeInView } from "@/shared/ui/FadeInView";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  support: string;
  tone: "light" | "gray";
  image: string;
  imageAlt: string;
}

const benefits: Benefit[] = [
  {
    title: "Invitación premium desde el primer contacto",
    description: "Confirmaciones rápidas y sin seguimiento manual.",
    support: "Menos fricción · Más control",
    tone: "light",
    image: "/images/invitacion_premium.png",
    imageAlt: "Mockup de invitación premium",
  },
  {
    title: "Acceso QR preciso en segundos",
    description: "Cada invitado entra con validación única y segura.",
    support: "Sin filas largas · Sin accesos no autorizados",
    tone: "gray",
    image: "/images/confirmada_qr.png",
    imageAlt: "Pantalla de confirmación y acceso QR",
  },
  {
    title: "Galería privada, todo en un solo lugar",
    description: "Recibe y organiza recuerdos sin depender de múltiples chats.",
    support: "Orden total · Privacidad real",
    tone: "light",
    image: "/images/galeria.png",
    imageAlt: "Vista de galería privada del evento",
  },
  {
    title: "Decisiones claras antes y durante el evento",
    description: "Visualiza asistencia en tiempo real y ajusta logística al instante.",
    support: "Información accionable · Tranquilidad operativa",
    tone: "gray",
    image: "/images/estadisticas.png",
    imageAlt: "Panel de estadísticas del evento",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="beneficios"
      className="py-12 md:py-16 bg-[#080808]"
      aria-label="Beneficios de la plataforma"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 space-y-6 md:space-y-8">
        <div className="text-center space-y-6 py-14 md:py-20">
          <FadeInView>
            <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">
              Beneficios
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-[#f2f2f2] font-light leading-[1.06]">
              Resultados claros.
              <br />
              <span className="text-white/45">Sin complejidad operativa.</span>
            </h2>
          </FadeInView>
        </div>

        {benefits.map((benefit, idx) => {
          const isGray = benefit.tone === "gray";

          return (
            <FadeInView key={benefit.title} delay={0.08 + idx * 0.06}>
              <article
                className={`rounded-[34px] border px-7 py-10 md:px-12 md:py-14 ${
                  isGray
                    ? "bg-[#121212] border-white/[0.08]"
                    : "bg-[#0e0e0f] border-white/[0.08]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <header className="space-y-6">
                    <p className="text-[12px] uppercase tracking-[0.24em] text-white/45">
                      Beneficio {idx + 1}
                    </p>
                    <h3 className="font-display text-4xl md:text-6xl text-[#f2f2f2] font-light leading-[1.04] tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-xl">
                      {benefit.description}
                    </p>
                    <p className="text-white/45 text-sm uppercase tracking-[0.15em]">
                      {benefit.support}
                    </p>
                  </header>

                  <div className="relative h-[240px] md:h-[300px] rounded-[24px] bg-[#17181a] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      width={760}
                      height={570}
                      className="w-[92%] h-auto drop-shadow-[0_16px_26px_rgba(0,0,0,0.36)]"
                      sizes="(max-width: 1024px) 90vw, 44vw"
                    />
                  </div>
                </div>
              </article>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
};
