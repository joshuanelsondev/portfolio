/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headshot1: "url(./src/assets/headshot.jpeg)",
        headshot2: "url(./src/assets/pursuit_headshot.png)",
        dark: "url(./src/assets/slickCarbon.png)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    colors: {
      primary: "#52B788",
      secondary: "#295C44",
      blue: "#BFDBF7",
      gray: "#808080",
      darkGray: "#212121",
      white: "#FFFFFF",
      red: "#E73B3B",
      black: "#000000",
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Proxima Nova'],
    },
  },
  plugins: [],
  darkMode: "class",
};

