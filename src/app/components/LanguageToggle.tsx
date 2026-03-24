"use client";
import { motion } from "framer-motion";
import { useLang, t } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.2 }}
      className="fixed bottom-6 right-6 z-[60] bg-bg-card border border-gold-primary/40 hover:border-gold-primary px-4 py-2 font-mono text-sm text-gold-primary hover:text-gold-light transition-all duration-300 flex items-center gap-2 group"
      title={lang === "en" ? "Switch to Chinese" : "Switch to English"}
    >
      <span className="w-5 h-5 rounded-full border border-red-primary/60 flex items-center justify-center text-[10px] font-chinese text-red-bright group-hover:bg-red-primary/20 transition-colors">
        {lang === "en" ? "\u8BD1" : "A"}
      </span>
      {t.lang_button[lang]}
    </motion.button>
  );
}
