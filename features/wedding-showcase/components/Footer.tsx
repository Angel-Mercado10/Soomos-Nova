import { FadeInView } from "@/shared/ui/FadeInView";

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61588124897380";
const INSTAGRAM_URL = "https://www.instagram.com/soomosnova/";
const WHATSAPP_URL =
  "https://wa.me/5559958257?text=Hola%2C%20estoy%20interesado%20en%20conocer%20el%20sistema%20de%20gesti%C3%B3n%20digital%20de%20invitados%20de%20Soomos%20Nova.";
const EMAIL = "hola@soomosnova.com";

const socialLinks = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a.75.75 0 110-1.5.75.75 0 010 1.5z",
  },
  {
    label: "Facebook",
    href: FACEBOOK_URL,
    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#060606] border-t border-white/[0.06] py-16 md:py-20"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <span className="font-display text-2xl tracking-wide text-white">
                Soomos<span className="text-gold">Nova</span>
              </span>
              <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
                Gestión digital premium de invitados para bodas exclusivas.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
                Contacto
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${EMAIL}?subject=Solicitud%20de%20disponibilidad%20%E2%80%93%20Boda%20%5BFECHA%5D&body=Hola%20equipo%20SoomosNova%2C%0D%0A%0D%0AEstoy%20interesada%2Fo%20en%20conocer%20m%C3%A1s%20sobre%20el%20sistema%20premium%20de%20gesti%C3%B3n%20digital%20para%20invitados.%0D%0A%0D%0ADatos%20de%20mi%20evento%3A%0D%0A%E2%80%A2%20Fecha%20tentativa%3A%0D%0A%E2%80%A2%20Ciudad%3A%0D%0A%E2%80%A2%20N%C3%BAmero%20aproximado%20de%20invitados%3A%0D%0A%0D%0AMe%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20privada%20y%20conocer%20disponibilidad.%0D%0A%0D%0AQuedo%20atenta%2Fo%20a%20su%20respuesta.%0D%0A%0D%0ANombre%3A%0D%0ATel%C3%A9fono%20de%20contacto%3A`}
                  className="block text-white/50 text-sm hover:text-gold transition-colors duration-300 font-light"
                  aria-label={`Enviar correo a ${EMAIL}`}
                >
                  {EMAIL}
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Solicitud%20de%20disponibilidad%20%E2%80%93%20Boda%20%5BFECHA%5D&body=Hola%20equipo%20SoomosNova%2C%0D%0A%0D%0AEstoy%20interesada%2Fo%20en%20conocer%20m%C3%A1s%20sobre%20el%20sistema%20premium%20de%20gesti%C3%B3n%20digital%20para%20invitados.%0D%0A%0D%0ADatos%20de%20mi%20evento%3A%0D%0A%E2%80%A2%20Fecha%20tentativa%3A%0D%0A%E2%80%A2%20Ciudad%3A%0D%0A%E2%80%A2%20N%C3%BAmero%20aproximado%20de%20invitados%3A%0D%0A%0D%0AMe%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20privada%20y%20conocer%20disponibilidad.%0D%0A%0D%0AQuedo%20atenta%2Fo%20a%20su%20respuesta.%0D%0A%0D%0ANombre%3A%0D%0ATel%C3%A9fono%20de%20contacto%3A`}
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 border border-white/[0.12] rounded-full text-white/55 text-xs uppercase tracking-[0.2em] hover:border-gold/30 hover:text-gold transition-all duration-300"
                  aria-label="Abrir Gmail para enviar correo"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  Gmail
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/50 text-sm hover:text-gold transition-colors duration-300 font-light"
                  aria-label="Contactar por WhatsApp"
                >
                  +52 55 5995 8257
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
                Redes
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/[0.08] hover:border-gold/30 rounded-full text-white/40 hover:text-gold transition-all duration-300"
                    aria-label={`Visitar ${social.label}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Divider + Copyright */}
        <div className="border-t border-white/[0.06] mt-12 pt-8">
          <p className="text-white/20 text-xs text-center font-light tracking-wide">
            {year} SoomosNova. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
