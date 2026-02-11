"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-180 transition-transform duration-700">
              indeterminate_question_box
            </span>
            <span className="font-display font-semibold text-2xl tracking-wide text-white">
              Soomos<span className="text-primary">Nova</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {['Experiencia', 'Galería', 'Membresía'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 border border-primary/50 text-primary hover:bg-primary hover:text-background transition-all duration-300 uppercase text-xs tracking-[0.2em] font-medium shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-gold-glow">
              Acceso VIP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col items-center">
              {['Experiencia', 'Galería', 'Membresía'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};