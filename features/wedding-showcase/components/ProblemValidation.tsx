import { FadeInView } from "@/shared/ui/FadeInView";

const painPoints = [
  {
    text: "Confirmaciones desordenadas entre chats, llamadas y hojas de cálculo.",
  },
  {
    text: "Invitados no autorizados que comprometen la intimidad del evento.",
  },
  {
    text: "Acceso sin control al venue, sin validación profesional.",
  },
  {
    text: "Fotos dispersas en decenas de dispositivos, sin unidad ni privacidad.",
  },
];

export const ProblemValidation = () => {
  return (
    <section
      id="problema"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="El problema que resolvemos"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInView>
            <p className="text-[14px] uppercase tracking-[0.4em] text-gold">
              El Problema
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight">
              El caos no combina
              <br />
              <span className="text-white/40">con una boda elegante.</span>
            </h2>
          </FadeInView>
        </div>

        {/* Pain Points */}
        <div className="space-y-0">
          {painPoints.map((point, idx) => (
            <FadeInView key={idx} delay={0.15 + idx * 0.08}>
              <div className="flex items-start gap-5 py-6 border-b border-white/[0.06] last:border-b-0">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  {point.text}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};
