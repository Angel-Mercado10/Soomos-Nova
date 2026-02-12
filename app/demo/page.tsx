import { Navbar } from "@/features/wedding-showcase/components/Navbar";
import { ChatInterface } from "@/features/guest-experience/components/ChatInterface";
import * as motion from "framer-motion/client";

export default function DemoPage() {
  return (
    <main className="bg-void min-h-screen relative overflow-hidden">
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="space-y-4"
        >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans">
                Save The Date
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white">
                Ana & Luis
            </h1>
            <p className="text-white/60 font-serif italic text-xl">
                15 . Oct . 2025
            </p>
        </motion.div>
      </div>

      <ChatInterface />
    </main>
  );
}
