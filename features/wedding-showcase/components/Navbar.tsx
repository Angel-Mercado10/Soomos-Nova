"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "El Problema", href: "#problema" },
  { label: "Solución", href: "#experiencia" },
  { label: "Exclusividad", href: "#exclusividad" },
] as const;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo — Text only, luxury logomark */}
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="SoomosNova — Inicio"
          >
            <span className="font-display text-2xl tracking-wide text-white">
              Soomos<span className="text-gold">Nova</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[14px] uppercase tracking-[0.25em] text-white/50 hover:text-gold transition-colors duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="https://wa.me/5559958257?text=Hola%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20privada%20de%20SoomosNova"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-7 py-2.5 border border-gold/40 text-gold text-[14px] uppercase tracking-[0.25em] font-medium hover:bg-gold hover:text-[#080808] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              aria-label="Agendar demostración privada"
            >
              Agendar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-gold transition-colors duration-300 p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[14px] uppercase tracking-[0.25em] text-white/50 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5559958257?text=Hola%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20privada%20de%20SoomosNova"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-7 py-2.5 border border-gold/40 text-gold text-[14px] uppercase tracking-[0.25em] font-medium hover:bg-gold hover:text-[#080808] transition-all duration-300"
                aria-label="Agendar demostración privada"
              >
                Agendar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};