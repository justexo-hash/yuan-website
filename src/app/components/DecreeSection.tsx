"use client";
import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";
import GoldDivider from "./GoldDivider";
import RedStamp from "./RedStamp";
import { useLang, t } from "./LanguageContext";

const paragraphKeys = ["decree_1", "decree_2", "decree_3", "decree_4"] as const;

export default function DecreeSection() {
  const { lang } = useLang();

  return (
    <ParallaxImage
      src="/images/dragon-banner.jpeg"
      alt="Dragon banner"
      overlayOpacity={0.82}
      className="py-24 sm:py-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gold-primary tracking-[0.2em] text-center"
        >
          {t.decree_header[lang]}
        </motion.p>

        <GoldDivider />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-gold-primary/40 bg-bg-card/80 p-8 sm:p-12 relative"
        >
          <div className="space-y-6 font-decree text-lg text-text-primary leading-relaxed">
            {paragraphKeys.map((key, i) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
              >
                {t[key][lang]}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-l-2 border-red-primary pl-4 font-bold"
            >
              {t.decree_declaration[lang]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-text-secondary italic"
            >
              {t.decree_closing[lang]}
            </motion.p>
          </div>

          <div className="flex justify-end mt-8">
            <RedStamp text="核准" size="lg" delay={0.3} />
          </div>

          <div className="mt-8 text-right space-y-1">
            <p className="font-decree italic text-text-secondary">{t.decree_sig1[lang]}</p>
            <p className="font-decree italic text-text-secondary">{t.decree_sig2[lang]}</p>
            <p className="font-mono text-xs text-text-secondary/50 mt-2">Ref: BMD/DECREE/¥-2026-0324</p>
          </div>
        </motion.div>
      </div>
    </ParallaxImage>
  );
}
