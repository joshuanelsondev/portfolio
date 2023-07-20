/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headshot1: "url(./src/assets/headshot.jpeg)",
        headshot2: "url(./src/assets/pursuit_headshot.png)",

      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    colors: {
      dark: "#021d28",
      primary: "#1F7A8C",
      secondary: "#D1E3DD",
      blue: "#BFDBF7",
      gray: "#E1E5F2",
      white: "#FFFFFF",
      red: "#E73B3B",
    },
  },
  plugins: [],
  darkMode: "class",
};

