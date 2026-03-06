"use client";

import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
    </div>
  );
};
