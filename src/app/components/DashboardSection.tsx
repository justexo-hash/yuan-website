"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ParallaxImage from "./ParallaxImage";
import GoldDivider from "./GoldDivider";
import CounterAnimation from "./CounterAnimation";
import ParabolicChart from "./ParabolicChart";
import { useLang, t } from "./LanguageContext";

function DeathClock() {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const startDate = new Date("2023-01-01T00:00:00Z").getTime();

  useEffect(() => {
    const update = () => {
      const diff = Date.now() - startDate;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setElapsed({ days, hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="font-mono text-3xl sm:text-4xl text-text-heading font-bold tracking-wider">
      <span>{elapsed.days}</span>
      <span className="text-text-secondary text-lg">d </span>
      <span>{String(elapsed.hours).padStart(2, "0")}</span>
      <span className="text-text-secondary text-lg">h </span>
      <span>{String(elapsed.minutes).padStart(2, "0")}</span>
      <span className="text-text-secondary text-lg">m </span>
      <span className="text-red-bright">{String(elapsed.seconds).padStart(2, "0")}</span>
      <span className="text-text-secondary text-lg">s</span>
    </div>
  );
}

function ConfidenceBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full h-40 bg-bg-primary/50 rounded-sm relative overflow-hidden border border-gold-primary/20">
      <motion.div
        initial={{ height: "100%" }}
        animate={isInView ? { height: "12%" } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-primary to-green-600"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-4xl text-red-bright font-bold">11.3%</span>
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function DashboardSection() {
  const { lang } = useLang();

  return (
    <ParallaxImage
      src="/images/smoke-texture.jpeg"
      alt="Smoke"
      overlayOpacity={0.85}
      className="py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-text-heading text-center font-black"
        >
          {t.dash_title[lang]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-gold-primary tracking-[0.2em] text-center mt-3"
        >
          {t.dash_subtitle[lang]}
        </motion.p>
        <GoldDivider />

        {/* Coin centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-primary/20 blur-3xl rounded-full" />
            <div className="animate-coin-spin" style={{ perspective: "1000px" }}>
              <Image
                src="/images/coin-3d.png"
                alt="Yuan Coin"
                width={200}
                height={200}
                className="relative z-10 rounded-full"
              />
            </div>
          </div>
          <p className="font-display text-xl text-text-heading mt-4 font-black">{t.dash_coin_label[lang]}</p>
        </motion.div>

        <ParabolicChart />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Death Clock */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-card border-l-2 border-l-gold-primary border-t-2 border-t-red-primary p-6"
          >
            <p className="font-body text-sm uppercase tracking-wide text-text-secondary mb-4">{t.dash_death_label[lang]}</p>
            <DeathClock />
            <p className="text-red-bright text-sm font-bold mt-3 animate-pulse">{t.dash_death_status[lang]}</p>
            <p className="font-mono text-xs text-text-secondary/50 mt-2">{t.dash_death_source[lang]}</p>
          </motion.div>

          {/* Card 2 - Nations */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-card border-l-2 border-l-gold-primary border-t-2 border-t-red-primary p-6"
          >
            <p className="font-body text-sm uppercase tracking-wide text-text-secondary mb-4">{t.dash_nations_label[lang]}</p>
            <div className="flex items-baseline gap-2">
              <CounterAnimation target={147} className="font-display text-5xl text-text-heading font-bold" />
              <span className="text-text-secondary text-lg">{t.dash_nations_of[lang]}</span>
            </div>
            <div className="w-full h-2 bg-bg-primary/50 rounded-full mt-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75.4%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-red-primary rounded-full"
              />
            </div>
            <p className="font-mono text-xs text-text-secondary/50 mt-2">{t.dash_nations_source[lang]}</p>
          </motion.div>

          {/* Card 3 - Dollar Confidence */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-card border-l-2 border-l-gold-primary border-t-2 border-t-red-primary p-6"
          >
            <p className="font-body text-sm uppercase tracking-wide text-text-secondary mb-4">{t.dash_confidence_label[lang]}</p>
            <ConfidenceBar />
            <p className="font-mono text-xs text-red-bright mt-2">{t.dash_confidence_drop[lang]}</p>
          </motion.div>

          {/* Card 4 - Adoption Rate */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-card border-l-2 border-l-gold-primary border-t-2 border-t-red-primary p-6"
          >
            <p className="font-body text-sm uppercase tracking-wide text-text-secondary mb-4">{t.dash_adoption_label[lang]}</p>
            <CounterAnimation target={94.7} decimals={1} suffix="%" className="font-display text-5xl text-text-heading font-bold" />
            <p className="font-mono text-xs text-text-secondary/50 mt-3">{t.dash_adoption_source[lang]}</p>
          </motion.div>

          {/* Card 5 - Exchange Rate */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-bg-card border-l-2 border-l-gold-primary border-t-2 border-t-red-primary p-6 md:col-span-2 lg:col-span-2"
          >
            <p className="font-body text-sm uppercase tracking-wide text-text-secondary mb-4">{t.dash_rate_label[lang]}</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-display text-4xl sm:text-5xl text-text-heading font-bold">1 ¥UAN</span>
              <span className="text-text-secondary text-2xl">=</span>
              <CounterAnimation target={847.23} decimals={2} className="font-display text-4xl sm:text-5xl text-green-400 font-bold" />
              <span className="font-display text-4xl sm:text-5xl text-text-secondary font-bold">USD</span>
              <span className="text-green-400 text-xl ml-2">↑↑↑</span>
            </div>
            <p className="font-mono text-xs text-text-secondary/50 mt-3">{t.dash_rate_source[lang]}</p>
          </motion.div>
        </div>
      </div>
    </ParallaxImage>
  );
}
