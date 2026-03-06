"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 uppercase tracking-[0.2em] overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-[#111] hover:bg-white/90",
    secondary: "bg-gold text-[#080808] hover:bg-gold/90",
    outline: "border border-white/20 text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-[10px]",
    md: "px-10 py-4 text-[12px]",
    lg: "px-14 py-5 text-[14px]",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
};
