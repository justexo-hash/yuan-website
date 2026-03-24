"use client";
import Image from "next/image";
import { useLang, t } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="py-16 bg-bg-secondary border-t border-gold-primary/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Seal */}
        <div className="flex justify-center mb-10">
          <div className="relative w-12 h-12 rounded-full border-2 border-gold-primary/60 flex items-center justify-center overflow-hidden">
            <Image src="/images/yuan-logo.png" alt="Yuan" width={48} height={48} />
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-body text-sm text-gold-primary font-semibold uppercase tracking-wider mb-4">
              {t.foot_channels[lang]}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-sm text-text-secondary hover:text-gold-light transition-colors">
                  X: @yuancoin
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-text-secondary hover:text-gold-light transition-colors">
                  {lang === "en" ? "Telegram: Bureau Communications" : "Telegram: 局通讯"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-sm text-gold-primary font-semibold uppercase tracking-wider mb-4">
              {t.foot_departments[lang]}
            </h3>
            <ul className="space-y-2">
              {(["foot_dept_1", "foot_dept_2", "foot_dept_3", "foot_dept_4"] as const).map((key) => (
                <li key={key}>
                  <span className="font-body text-sm text-text-secondary">{t[key][lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-sm text-gold-primary font-semibold uppercase tracking-wider mb-4">
              {t.foot_compliance[lang]}
            </h3>
            <ul className="space-y-2">
              {(["foot_comp_1", "foot_comp_2", "foot_comp_3"] as const).map((key) => (
                <li key={key}>
                  <span className="font-body text-sm text-text-secondary">{t[key][lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold-primary/10 pt-6 text-center space-y-1">
          <p className="font-mono text-xs text-text-secondary/50">{t.foot_copy_1[lang]}</p>
          <p className="font-mono text-xs text-text-secondary/50">{t.foot_copy_2[lang]}</p>
          <p className="font-mono text-xs text-text-secondary/50">{t.foot_copy_3[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
