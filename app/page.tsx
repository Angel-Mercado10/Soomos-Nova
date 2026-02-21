import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { Hero } from "@/features/wedding-showcase/components/Hero";
import { ProblemValidation } from "@/features/wedding-showcase/components/ProblemValidation";
import { SolutionSection } from "@/features/wedding-showcase/components/SolutionSection";
import { ExclusivitySection } from "@/features/wedding-showcase/components/ExclusivitySection";
import { FinalCTA } from "@/features/wedding-showcase/components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <ProblemValidation />
      <SolutionSection />
      <ExclusivitySection />
      <FinalCTA />
    </main>
  );
}