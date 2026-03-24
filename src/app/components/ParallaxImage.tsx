"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  overlayOpacity?: number;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function ParallaxImage({
  src,
  overlayOpacity = 0.82,
  speed = 0.5,
  className = "",
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: `rgba(10,10,15,${overlayOpacity})` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
