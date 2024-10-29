/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        input: {
          DEFAULT: "#424c52",
          foreground: "#ffffff",
        },
        operator: {
          DEFAULT: "#f5913e",
        },
        number: {
          DEFAULT: "#e0e0e0",
        },
        background: {
          DEFAULT: "#ffffff",
        },
        foreground: {
          DEFAULT: "#000000",
        },
      },
    },
  },
  plugins: [],
};
