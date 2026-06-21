/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        coal: "#0E0E10",
        surface: "#141417",
        elevated: "#1B1B1F",
        line: "rgba(255,255,255,0.09)",
        lineStrong: "rgba(255,255,255,0.22)",
        ash: "#9A9AA0",
        bone: "#F4F4F4",
        brand: "#FFD834",
        brandDark: "#E6BE00",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1320px" },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.6)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        marqueeFast: "marquee 18s linear infinite",
        marqueeReverse: "marqueeReverse 32s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
