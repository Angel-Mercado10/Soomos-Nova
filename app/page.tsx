import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { Hero } from "@/features/wedding-showcase/components/Hero";
import { SocialProof } from "@/features/wedding-showcase/components/SocialProof";
import { FeaturesGrid } from "@/features/wedding-showcase/components/FeaturesGrid";
import { ChatInterface } from "@/features/guest-experience/components/ChatInterface";

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <FeaturesGrid />
      
      {/* 👇 Aquí vive el Concierge, flotando sobre todo 👇 */}
      <ChatInterface />
    </main>
  );
}