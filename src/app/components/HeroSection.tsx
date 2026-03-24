"use client";
import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";
import RedStamp from "./RedStamp";
import { useLang, t } from "./LanguageContext";

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <ParallaxImage
      src="/images/hero-city.jpeg"
      alt="Ancient city"
      overlayOpacity={0.5}
      speed={0.5}
      className="min-h-screen flex items-center justify-center pt-8"
    >
      {/* Vignette */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at center, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 70%)"
      }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-gold-primary tracking-[0.25em] mb-6"
        >
          {t.hero_bureau[lang]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-7xl sm:text-8xl lg:text-[12rem] font-black text-text-heading leading-none relative"
          style={{ textShadow: "0 0 80px rgba(196, 30, 58, 0.3)" }}
        >
          ¥UAN
          <RedStamp
            text="官方"
            size="sm"
            delay={0.8}
            className="absolute -bottom-4 -right-4 sm:-right-8 lg:-right-16"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-decree text-xl sm:text-2xl text-text-primary mt-6"
        >
          {t.hero_subtitle[lang]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-base text-text-secondary italic mt-4"
        >
          {t.hero_subtext[lang]}
        </motion.p>

      </div>
    </ParallaxImage>
  );
}
