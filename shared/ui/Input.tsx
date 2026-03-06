"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full space-y-2">
      {label && <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 ml-4">{label}</label>}
      <input
        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  );
};
