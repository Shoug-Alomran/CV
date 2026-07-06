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
          950: "#000000",
          900: "#060708",
          850: "#0a0c0e",
          800: "#101315",
          700: "#1b1f22",
        },
        accent: {
          cyan: "#22d3ee",
          green: "#4ade80",
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
