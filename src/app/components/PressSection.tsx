"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GoldDivider from "./GoldDivider";
import { useLang, t } from "./LanguageContext";

const pressItems = [
  { image: "/images/meme-car.jpg", captionKey: "press_cap_1", ref: "IMG-2026-0417 / Cultural Compliance Division", code: "¥-IMG-001" },
  { image: "/images/meme-bike.jpg", captionKey: "press_cap_2", ref: "IMG-2026-0312 / Transportation & Optics Bureau", code: "¥-IMG-002" },
  { image: "/images/meme-traders.jpg", captionKey: "press_cap_3", ref: "IMG-2026-0228 / Foreign Observation Division", code: "¥-IMG-003" },
  { image: "/images/meme-sunglasses.jpg", captionKey: "press_cap_4", ref: "IMG-2026-0189 / Field Intelligence Unit", code: "¥-IMG-004" },
  { image: "/images/meme-phone.jpg", captionKey: "press_cap_5", ref: "IMG-2026-0501 / Strategic Communications Wing", code: "¥-IMG-005" },
];

export default function PressSection() {
  const { lang } = useLang();

  return (
    <section className="py-24 sm:py-32 bg-bg-primary relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-text-heading text-center font-black"
        >
          {t.press_title[lang]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gold-primary tracking-[0.2em] text-center mt-3"
        >
          {t.press_subtitle[lang]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm text-text-secondary italic text-center mt-3 max-w-2xl mx-auto"
        >
          {t.press_disclaimer[lang]}
        </motion.p>
        <GoldDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressItems.map((item, i) => {
            const caption = t[item.captionKey][lang];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-bg-card border border-gold-primary/30 group hover:-translate-y-1 transition-all duration-300 hover:border-gold-primary/60 overflow-hidden"
              >
                <div className="bg-red-dark/50 px-4 py-2 font-mono text-xs text-gold-light flex justify-between">
                  <span>{t.press_classification[lang]}</span>
                  <span>REF: {item.code}</span>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-red-primary/0 group-hover:bg-red-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-chinese text-4xl text-stamp-red/0 group-hover:text-stamp-red/40 transition-colors duration-300 rotate-[-15deg] font-bold select-none">
                      核准
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-sm text-text-primary font-semibold leading-relaxed">
                    &ldquo;{caption}&rdquo;
                  </p>
                  <p className="font-mono text-xs text-text-secondary/60 mt-2">{item.ref}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
