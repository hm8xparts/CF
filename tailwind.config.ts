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
        // Warm paper backgrounds
        paper: {
          DEFAULT: "#FBFAF6",
          soft: "#F5F3EC",
          deep: "#EEEADF",
        },
        // Deep forest ink for text and dark sections
        ink: {
          DEFAULT: "#12211C",
          soft: "#2C3A34",
          muted: "#5A6862",
        },
        // Brand teal-emerald — "cause meets commerce"
        brand: {
          50: "#EAF6F2",
          100: "#CDEAE0",
          200: "#9BD4C2",
          300: "#63B9A0",
          400: "#2F9C7F",
          500: "#0E7C66",
          600: "#0A6353",
          700: "#084B3F",
          800: "#06382F",
          900: "#042721",
        },
        // Warm coral accent — human, mission-driven highlight
        accent: {
          50: "#FEF1EC",
          100: "#FBDBCF",
          200: "#F7B49B",
          300: "#F28C6A",
          400: "#EE6F45",
          500: "#E1552B",
          600: "#C24421",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,33,28,0.04), 0 12px 32px -12px rgba(18,33,28,0.18)",
        lift: "0 2px 4px rgba(18,33,28,0.05), 0 24px 48px -20px rgba(18,33,28,0.30)",
        glow: "0 20px 60px -24px rgba(14,124,102,0.55)",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
