import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0f",
        "bg-secondary": "#0f1019",
        "bg-card": "#13141e",
        "red-primary": "#c41e3a",
        "red-bright": "#e63946",
        "red-dark": "#8b1a2b",
        "gold-primary": "#c9a84c",
        "gold-light": "#dfc06e",
        "gold-dark": "#a08030",
        "text-primary": "#e8e0d4",
        "text-secondary": "#9a8e7f",
        "text-heading": "#f5efe6",
        parchment: "#f5e6c8",
        "parchment-dark": "#d4c4a0",
        "stamp-red": "#cc2233",
      },
      fontFamily: {
        display: ["var(--font-noto-serif-display)", "serif"],
        decree: ["var(--font-playfair)", "serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        chinese: ["var(--font-noto-serif-sc)", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse_glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        stamp_shake: {
          "0%, 100%": { transform: "translate(0, 0) rotate(-15deg)" },
          "25%": { transform: "translate(3px, -2px) rotate(-15deg)" },
          "50%": { transform: "translate(-3px, 2px) rotate(-15deg)" },
          "75%": { transform: "translate(2px, 3px) rotate(-15deg)" },
        },
        float_down: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        coin_spin: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulse_glow 2s ease-in-out infinite",
        "stamp-shake": "stamp_shake 0.1s ease-in-out",
        "float-down": "float_down 2s ease-in-out infinite",
        "coin-spin": "coin_spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
