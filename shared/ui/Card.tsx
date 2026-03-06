"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -10, borderColor: "rgba(212, 175, 55, 0.4)" } : {}}
      className={`bg-[#111111]/40 backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};
