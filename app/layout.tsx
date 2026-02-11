import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "@/app/globals.css"; // 👈 Asegúrate del punto ./

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoomosNova | Arquitectura Digital",
  description: "Tu boda, inmortalizada en el infinito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* 👇 ESTO ES LO QUE TE FALTA PARA LOS ICONOS 👇 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-void text-white selection:bg-gold selection:text-void`}
      >
        {children}
      </body>
    </html>
  );
}