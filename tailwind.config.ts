import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0C10",
        depth: "#060709",
        neon: {
          emerald: "#10B981",
          acid: "#84CC16",
          copper: "#FF9F1C",
          violet: "#A855F7",
        },
      },
      fontFamily: {
        display: ["var(--font-exo2)", "system-ui", "sans-serif"],
        ui: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        body: ["var(--font-switzer)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        squircle: "1.75rem",
        "squircle-sm": "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
