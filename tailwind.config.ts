import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#0B1E35",
          900: "#0B2A4A",
          800: "#12365F",
          700: "#184A7A",
          600: "#1E5A8A",
          500: "#2E7ABF",
          100: "#E6EEF7",
          50: "#F1F6FC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Instrument Sans"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
