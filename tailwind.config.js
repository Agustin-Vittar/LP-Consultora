/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroimg:
          "url('src/assets/Multiracial group of young creative people in smart casual wear discussing business shaking hands together.png')",
      },
      colors: {
        primary: "#F9F4F4",
      },
    },
  },
  plugins: [],
};
