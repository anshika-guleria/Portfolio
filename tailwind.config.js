/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // 👈 ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gummy: ['"Sour Gummy"', 'cursive'],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 4s infinite",
      },
    },
  },
  plugins: [],
};