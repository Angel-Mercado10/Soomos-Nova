interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  isPlaceholder?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Aquí aparecerá un testimonio real de una pareja sobre la experiencia con SoomosNova.",
    name: "Testimonio disponible pronto",
    detail: "Estructura lista para agregar prueba social real",
    isPlaceholder: true,
  },
  {
    quote:
      "Este espacio está preparado para mostrar resultados, confianza y autoridad con testimonios verificados.",
    name: "Testimonio disponible pronto",
    detail: "Añade nombre de pareja, ciudad y fecha del evento",
    isPlaceholder: true,
  },
  {
    quote:
      "La sección ya está diseñada para reemplazar este texto por citas reales sin tocar la estructura visual.",
    name: "Testimonio disponible pronto",
    detail: "Mantiene consistencia premium y legibilidad",
    isPlaceholder: true,
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonios"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Testimonios de parejas"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-gold/[0.03] blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[14px] uppercase tracking-[0.4em] text-gold mb-6">
          Testimonios
        </p>
        <h2 className="text-center font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight mb-14">
          Prueba social con presencia elegante.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative h-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-9"
            >
              <span
                className="text-gold/20 font-display text-5xl leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-4 text-white/60 text-base leading-relaxed font-light italic">
                {testimonial.quote}
              </p>
              <footer className="mt-8 space-y-1">
                <p className="font-display text-[#F2F2F2] text-base tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-white/35 text-sm font-light">
                  {testimonial.detail}
                </p>
                {testimonial.isPlaceholder && (
                  <p className="text-gold/70 text-xs uppercase tracking-[0.18em] pt-2">
                    Placeholder
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
