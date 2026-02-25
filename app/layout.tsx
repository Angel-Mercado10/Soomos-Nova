import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { WhatsAppButton } from "@/shared/ui/WhatsAppButton";
import "@/app/globals.css";

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
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-[#080808] text-[#F2F2F2]`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}