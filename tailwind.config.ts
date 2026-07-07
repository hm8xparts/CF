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
        // Cool neutral paper backgrounds (brand light #F2F4F7)
        paper: {
          DEFAULT: "#FBFCFD",
          soft: "#F2F4F7",
          deep: "#E6E9EF",
        },
        // Brand navy for text and dark sections (#0F1D3D / #1F2937 / #6B7280)
        ink: {
          DEFAULT: "#0F1D3D",
          soft: "#1F2937",
          muted: "#6B7280",
        },
        // Brand coral — the "Fusion" accent and primary action color
        brand: {
          50: "#FFF1F3",
          100: "#FFDEE3",
          200: "#FFC2CA",
          300: "#FF9DAB",
          400: "#FB8493",
          500: "#FF6B7A",
          600: "#D22A44",
          700: "#AE1E35",
          800: "#8A1729",
          900: "#6B121F",
        },
        // Accent mirrors the coral family for small highlights and dots
        accent: {
          50: "#FFF1F3",
          100: "#FFDEE3",
          200: "#FFC2CA",
          300: "#FF9DAB",
          400: "#FF7E8D",
          500: "#FF6B7A",
          600: "#D22A44",
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
        glow: "0 18px 50px -22px rgba(255,107,122,0.55)",
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
