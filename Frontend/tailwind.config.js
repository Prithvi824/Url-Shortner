/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        small: {
          max: "430px",
        },
        tablet: {
          max: "768px",
        }
      }
    },
  },
  plugins: [],
}

