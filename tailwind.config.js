/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        sx: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },

      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
