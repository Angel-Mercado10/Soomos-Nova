import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { Hero } from "@/features/wedding-showcase/components/Hero";

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navbar /> {/* Asumo que ya tienes o haremos el Navbar */}
      <Hero />
      
      {/* Aquí irán las siguientes secciones: 
          - <FeaturesGrid /> (Concierge IA, Live Gallery)
          - <SocialProof /> (Vogue, Tatler logos)
          - <Pricing />
      */}
    </main>
  );
}