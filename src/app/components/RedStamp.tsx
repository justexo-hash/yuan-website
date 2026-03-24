"use client";
import { motion } from "framer-motion";

interface RedStampProps {
  text: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  className?: string;
}

export default function RedStamp({ text, size = "md", delay = 0, className = "" }: RedStampProps) {
  const sizes = {
    sm: "w-24 h-24 text-lg",
    md: "w-32 h-32 text-xl",
    lg: "w-40 h-40 text-2xl",
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -30 }}
      whileInView={{ scale: 1, rotate: -15 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay,
      }}
      className={`${sizes[size]} ${className}`}
    >
      <motion.div
        animate={{ x: [0, 3, -3, 2, 0], y: [0, -2, 2, 3, 0] }}
        transition={{ duration: 0.1, delay: delay + 0.3 }}
        className="w-full h-full rounded-full border-4 border-stamp-red flex items-center justify-center bg-stamp-red/10 backdrop-blur-sm"
      >
        <span className="font-chinese font-bold text-stamp-red select-none">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}
