"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import GoldDivider from "./GoldDivider";
import { useLang, t } from "./LanguageContext";

export default function ContractSection() {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);
  const contractAddress = "BXD5mvLKmKWbi5ykPYjHL8277VfSDRSF7GEpKtnwpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-bg-primary relative">
      <div className="max-w-2xl mx-auto px-6">
        <GoldDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-xs text-gold-primary tracking-[0.2em] mb-6">
            {t.contract_header[lang]}
          </p>

          <div
            className="border border-gold-primary/30 bg-bg-card px-6 py-4 flex items-center justify-between gap-4 cursor-pointer group hover:border-gold-primary/60 transition-colors"
            onClick={handleCopy}
          >
            <span className="font-mono text-sm text-text-primary break-all">
              {contractAddress}
            </span>
            <button className="shrink-0 text-gold-primary hover:text-gold-light transition-colors">
              {copied ? (
                <span className="font-mono text-xs text-green-400">{lang === "en" ? "RECORDED" : "已记录"}</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>

          <p className="font-body text-xs text-text-secondary mt-4">
            {t.contract_footer[lang]}
          </p>
        </motion.div>

        <GoldDivider />
      </div>
    </section>
  );
}
