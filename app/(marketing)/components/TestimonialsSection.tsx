interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Cada interacción con invitados exige precisión, privacidad y una ejecución impecable. SoomosNova está diseñado para responder a ese estándar.",
    name: "SoomosNova",
    detail: "Plataforma de gestión premium para bodas",
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonios"
      className="bg-[#0c0c0d] py-24 md:py-32"
      aria-label="Testimonios de parejas"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[12px] uppercase tracking-[0.3em] text-white/45 mb-6">
          Testimonios
        </p>
        <h2 className="text-center font-display text-4xl md:text-6xl text-[#f2f2f2] font-light leading-tight mb-14">
          Confianza que se percibe
          <br />
          <span className="text-white/50">desde el primer vistazo.</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative h-full rounded-[30px] border border-white/[0.08] bg-[#121212] p-9 md:p-12 text-center"
            >
              <span
                className="text-white/20 font-display text-5xl leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-5 text-white/68 text-lg leading-relaxed font-light italic">
                {testimonial.quote}
              </p>
              <footer className="mt-10 space-y-2">
                <p className="font-display text-[#f2f2f2] text-lg tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-white/40 text-sm font-light">
                  {testimonial.detail}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
