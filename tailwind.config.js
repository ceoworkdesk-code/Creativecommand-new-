/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1A1B1D",
        card: "#26282B",
        cardBorder: "#34363A",
        olive: "#5C6B3D",
        oliveBright: "#7A8B4F",
        ink: "#EDEDED",
        muted: "#A0A0A0",
        accent: "#C1552C",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
