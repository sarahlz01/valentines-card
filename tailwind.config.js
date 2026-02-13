/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        valentine: {
          pink: "#fb7185",
          rose: "#f9a8d4",
          deep: "#0b1120",
        },
      },
    },
  },
  plugins: [],
};

