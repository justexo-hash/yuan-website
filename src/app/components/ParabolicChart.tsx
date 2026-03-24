"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { useLang } from "./LanguageContext";

// Seeded pseudo-random for deterministic "noise"
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generatePriceData() {
  const points: { x: number; open: number; close: number; high: number; low: number; vol: number }[] = [];
  let price = 0.14; // start price
  const totalDays = 180;

  for (let i = 0; i < totalDays; i++) {
    const progress = i / totalDays;
    // Exponential base curve with acceleration in the last third
    const expFactor = progress < 0.65
      ? 0.14 + progress * 0.8
      : 0.14 + 0.65 * 0.8 + Math.pow((progress - 0.65) / 0.35, 2.2) * 6.5;

    // Add realistic noise
    const noise = (seededRandom(i * 7 + 3) - 0.45) * 0.15 * (1 + progress * 3);
    price = expFactor + noise;
    if (price < 0.05) price = 0.05;

    const volatility = 0.02 + progress * 0.3;
    const open = price - (seededRandom(i * 13 + 1) - 0.5) * volatility;
    const close = price + (seededRandom(i * 17 + 2) - 0.4) * volatility;
    const high = Math.max(open, close) + seededRandom(i * 23 + 5) * volatility * 0.5;
    const low = Math.min(open, close) - seededRandom(i * 29 + 7) * volatility * 0.5;
    // Volume increases with parabolic move
    const vol = 0.2 + seededRandom(i * 31 + 11) * 0.6 + progress * progress * 1.5;

    points.push({ x: i, open, close, high, low, vol });
  }
  return points;
}

export default function ParabolicChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();

  const data = useMemo(() => generatePriceData(), []);

  const chartW = 900;
  const chartH = 400;
  const padL = 65;
  const padR = 15;
  const padT = 20;
  const padB = 50;
  const volH = 60; // volume area height at bottom

  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;

  const allHighs = data.map(d => d.high);
  const maxPrice = Math.ceil(Math.max(...allHighs) * 1.1 * 10) / 10;
  const minPrice = 0;
  const maxVol = Math.max(...data.map(d => d.vol));

  const xScale = (i: number) => padL + (i / (data.length - 1)) * innerW;
  const yScale = (v: number) => padT + innerH - ((v - minPrice) / (maxPrice - minPrice)) * (innerH - volH);
  const volScale = (v: number) => padT + innerH - (v / maxVol) * volH;

  // Build the price line (using close prices)
  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(d.close).toFixed(1)}`)
    .join(" ");

  // Area fill under price line
  const areaPath = `${linePath} L${xScale(data.length - 1).toFixed(1)},${(padT + innerH).toFixed(1)} L${padL},${(padT + innerH).toFixed(1)} Z`;

  // Grid lines
  const priceGridLines = [0, 1, 2, 3, 4, 5, 6, 7];
  const dateLabels = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  // Candlesticks (sample every 3 days for readability)
  const candleWidth = Math.max(1.5, innerW / data.length * 0.6);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-bg-card border border-gold-primary/20 border-t-2 border-t-red-primary p-4 sm:p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-mono text-sm text-text-heading font-bold">¥UAN / USD</h3>
          <span className="font-mono text-xs text-text-secondary">
            {lang === "en" ? "180D Chart" : "180日走势图"} · {lang === "en" ? "Bureau of Fair Valuation" : "公平估值局"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl sm:text-3xl text-green-400 font-bold">847.23</span>
          <span className="font-mono text-xs text-green-400 bg-green-400/10 px-2 py-1">+604,350%</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartW} ${chartH}`}
          className="w-full h-auto min-w-[600px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c41e3a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c41e3a" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c41e3a" />
              <stop offset="70%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background grid */}
          {priceGridLines.map((val) => {
            const y = yScale(val);
            return y > padT && y < padT + innerH - volH ? (
              <g key={val}>
                <line
                  x1={padL} y1={y} x2={chartW - padR} y2={y}
                  stroke="#2A3348" strokeWidth="0.5" strokeDasharray="4,4"
                />
                <text x={padL - 8} y={y + 4} textAnchor="end" className="fill-text-secondary" fontSize="10" fontFamily="var(--font-jetbrains)">
                  {val.toFixed(1)}
                </text>
              </g>
            ) : null;
          })}

          {/* Vertical grid + date labels */}
          {dateLabels.map((label, i) => {
            const x = padL + (i / (dateLabels.length - 1)) * innerW;
            return (
              <g key={label}>
                <line
                  x1={x} y1={padT} x2={x} y2={padT + innerH}
                  stroke="#2A3348" strokeWidth="0.5" strokeDasharray="4,4"
                />
                <text x={x} y={chartH - 10} textAnchor="middle" className="fill-text-secondary" fontSize="10" fontFamily="var(--font-jetbrains)">
                  {label}
                </text>
              </g>
            );
          })}

          {/* Volume bars */}
          {data.map((d, i) => {
            const x = xScale(i);
            const barH = ((d.vol / maxVol) * volH);
            const isGreen = d.close >= d.open;
            return (
              <rect
                key={`vol-${i}`}
                x={x - candleWidth / 2}
                y={padT + innerH - barH}
                width={candleWidth}
                height={barH}
                fill={isGreen ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}
              />
            );
          })}

          {/* Area fill */}
          {isInView && (
            <motion.path
              d={areaPath}
              fill="url(#priceGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          )}

          {/* Candlesticks */}
          {data.map((d, i) => {
            if (i % 2 !== 0) return null; // show every other for readability
            const x = xScale(i);
            const isGreen = d.close >= d.open;
            const bodyTop = yScale(Math.max(d.open, d.close));
            const bodyBot = yScale(Math.min(d.open, d.close));
            const bodyH = Math.max(1, bodyBot - bodyTop);
            return (
              <g key={`candle-${i}`}>
                {/* Wick */}
                <line
                  x1={x} y1={yScale(d.high)} x2={x} y2={yScale(d.low)}
                  stroke={isGreen ? "#10b981" : "#ef4444"} strokeWidth="0.8"
                />
                {/* Body */}
                <rect
                  x={x - candleWidth}
                  y={bodyTop}
                  width={candleWidth * 2}
                  height={bodyH}
                  fill={isGreen ? "#10b981" : "#ef4444"}
                  opacity={0.9}
                />
              </g>
            );
          })}

          {/* Price line overlay */}
          {isInView && (
            <motion.path
              d={linePath}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
            />
          )}

          {/* Current price dot */}
          {isInView && (
            <motion.circle
              cx={xScale(data.length - 1)}
              cy={yScale(data[data.length - 1].close)}
              r="4"
              fill="#10b981"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.3 }}
            />
          )}

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="#2A3348" strokeWidth="1" />
          <line x1={padL} y1={padT + innerH} x2={chartW - padR} y2={padT + innerH} stroke="#2A3348" strokeWidth="1" />
        </svg>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-green-500/80 rounded-sm" />
            <span className="font-mono text-[10px] text-text-secondary">{lang === "en" ? "Bullish" : "看涨"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-red-500/80 rounded-sm" />
            <span className="font-mono text-[10px] text-text-secondary">{lang === "en" ? "Bearish" : "看跌"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-red-primary rounded" />
            <span className="font-mono text-[10px] text-text-secondary">{lang === "en" ? "Price" : "价格"}</span>
          </div>
        </div>
        <span className="font-mono text-[10px] text-text-secondary/50">
          {lang === "en" ? "Source: Bureau of Fair Valuation · Data may be 100% fabricated" : "来源：公平估值局 · 数据可能100%虚构"}
        </span>
      </div>
    </motion.div>
  );
}
