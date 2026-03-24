"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import RedStamp from "./RedStamp";
import { useLang, t } from "./LanguageContext";

export default function ChairmanSection() {
  const { lang } = useLang();

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, rgba(196,30,58,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative p-2 border-2 border-gold-primary/60">
            <div className="absolute inset-0 border border-gold-primary/30 m-1" />
            <Image
              src="/images/meme-chairman.jpg"
              alt="The Chairman"
              width={500}
              height={500}
              className="relative z-10 w-full max-w-lg"
            />
          </div>

          <div className="bg-gold-primary/10 border border-gold-primary/40 px-8 py-2 mt-4">
            <p className="font-display text-sm text-gold-primary tracking-wider text-center">
              {t.chair_title[lang]}
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <span className="font-decree text-6xl text-gold-primary leading-none">&ldquo;</span>
          <p className={`font-decree italic text-xl sm:text-2xl text-text-primary leading-relaxed -mt-8 ml-8 mr-4 ${lang === "zh" ? "font-chinese" : ""}`}>
            {t.chair_quote[lang]}
          </p>
          <p className="font-body text-sm text-gold-primary text-right mt-6">
            {t.chair_attribution[lang]}
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <RedStamp text="最高指示" size="lg" delay={0.5} />
        </div>
      </div>
    </section>
  );
}
