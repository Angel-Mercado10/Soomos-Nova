import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BenefitsSection } from "./components/BenefitsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen" role="main">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}