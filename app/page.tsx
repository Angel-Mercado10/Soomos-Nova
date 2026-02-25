import { Hero } from "@/features/wedding-showcase/components/Hero";
import { BenefitsSection } from "@/features/wedding-showcase/components/BenefitsSection";
import { TestimonialsSection } from "@/features/wedding-showcase/components/TestimonialsSection";
import { FinalCTA } from "@/features/wedding-showcase/components/FinalCTA";
import { Footer } from "@/features/wedding-showcase/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen" role="main">
      <Hero />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}