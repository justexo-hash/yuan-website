"use client";
import { useLang, t } from "./LanguageContext";

export default function TickerBar() {
  const { lang } = useLang();
  const text = t.ticker[lang];

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-red-dark/90 z-50 overflow-hidden border-b border-gold-primary/30 flex items-center">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i} className="font-mono text-xs text-gold-light tracking-wider px-4">
            {text.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
