"use client";

import React, { useState, useEffect, AnchorHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface WhatsAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const WhatsAppLink = ({
  href,
  children,
  ...props
}: WhatsAppLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onClick) props.onClick(e);
    setIsOpen(true);
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setIsOpen(false);
  };

  const handleProceed = () => {
    setIsOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const modal = mounted
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#080808]/70 backdrop-blur-md"
                onClick={handleClose}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-md bg-[#111214] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center text-center"
              >
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-gold/[0.15] blur-[60px] rounded-full pointer-events-none" />

                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner relative z-10 backdrop-blur-sm">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <h3 className="font-display text-[26px] text-white leading-tight mb-3 relative z-10">
                  Atención Privada
                </h3>
                <p className="text-white/50 text-[15px] font-light leading-relaxed mb-8 relative z-10 max-w-[280px] mx-auto">
                  Estás a punto de redirigirte a WhatsApp para hablar con un
                  asesor <span className="text-gold">SoomosNova</span>.
                </p>

                <div className="flex flex-col gap-3 w-full relative z-10">
                  <button
                    onClick={handleProceed}
                    className="w-full py-4 rounded-full bg-white text-[#111111] font-medium text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#e9e9e9] hover:-translate-y-[1px]"
                  >
                    Continuar a WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-4 rounded-full border border-white/10 text-white/50 font-medium text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/5 hover:text-white"
                  >
                    Cancelar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
      {modal}
    </>
  );
};
