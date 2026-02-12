import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { Hero } from "@/features/wedding-showcase/components/Hero";
import { SocialProof } from "@/features/wedding-showcase/components/SocialProof";
import { FeaturesGrid } from "@/features/wedding-showcase/components/FeaturesGrid";

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <FeaturesGrid />
    </main>
  );
}