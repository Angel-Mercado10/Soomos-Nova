import { FadeInView } from "@/shared/ui/FadeInView";
import { WhatsAppLink } from "@/shared/ui/WhatsAppLink";

export const ExclusivitySection = () => {
  return (
    <section
      id="exclusividad"
      className="bg-[#080808] py-32 md:py-40 relative overflow-hidden"
      aria-label="Disponibilidad limitada"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <FadeInView>
          <p className="text-[14px] uppercase tracking-[0.4em] text-gold mb-6">
            Disponibilidad Limitada
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-[#F2F2F2] font-light leading-tight mb-8">
            Solo 12 bodas por año.
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed font-light max-w-xl mx-auto mb-12">
            Cada proyecto recibe una dedicación artesanal que no es posible a
            escala. Limitamos nuestra disponibilidad para garantizar que cada
            boda reciba la atención impecable que merece.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <WhatsAppLink
            href="https://wa.me/5559958257?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20mi%20boda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-gold/40 text-gold text-[14px] uppercase tracking-[0.25em] font-medium hover:bg-gold hover:text-[#080808] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            aria-label="Solicitar disponibilidad por WhatsApp"
          >
            Solicitar Disponibilidad
          </WhatsAppLink>
        </FadeInView>
      </div>
    </section>
  );
};
