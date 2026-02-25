import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { Hero } from "@/features/wedding-showcase/components/Hero";
import { BenefitsSection } from "@/features/wedding-showcase/components/BenefitsSection";
import { ProblemValidation } from "@/features/wedding-showcase/components/ProblemValidation";
import { SolutionSection } from "@/features/wedding-showcase/components/SolutionSection";
import { TestimonialsSection } from "@/features/wedding-showcase/components/TestimonialsSection";
import { ExclusivitySection } from "@/features/wedding-showcase/components/ExclusivitySection";
import { FinalCTA } from "@/features/wedding-showcase/components/FinalCTA";
import { Footer } from "@/features/wedding-showcase/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <ProblemValidation />
      <SolutionSection />
      <TestimonialsSection />
      <ExclusivitySection />
      <FinalCTA />
      <Footer />
    </main>
  );
}