"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  const messages = [
    "ESTABLISHING SECURE CONNECTION...",
    "VERIFYING CLEARANCE LEVEL...",
    "ACCESS GRANTED",
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setVisible(false), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 rounded-full bg-red-primary/30 blur-2xl animate-pulse-glow" />
            <Image
              src="/images/yuan-logo.png"
              alt="Yuan"
              width={120}
              height={120}
              className="relative z-10"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-3 font-mono text-sm">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={phase >= i ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                className={i === 2 ? "text-red-bright text-base font-bold mt-2" : "text-text-secondary"}
              >
                {phase >= i && <TypewriterText text={msg} speed={30} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypewriterText({ text, speed }: { text: string; speed: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
}
