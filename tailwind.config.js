/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "SFMono-Regular", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#06090d",
          900: "#0a0f14",
          850: "#0e151c",
          800: "#131b24",
          700: "#1c2732",
        },
        accent: {
          cyan: "#72d8ef",
          blue: "#86a8ff",
          mist: "#c8f3ff",
        },
      },
      boxShadow: {
        premium: "0 24px 80px rgba(2, 8, 23, 0.22)",
        line: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
