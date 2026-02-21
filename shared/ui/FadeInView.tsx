"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
  duration?: number;
  className?: string;
}

const getVariants = (direction: "up" | "down" | "none"): Variants => {
  const yOffset = direction === "up" ? 20 : direction === "down" ? -20 : 0;
  return {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };
};

export const FadeInView = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  className,
}: FadeInViewProps) => {
  return (
    <motion.div
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
