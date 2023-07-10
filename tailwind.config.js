/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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

