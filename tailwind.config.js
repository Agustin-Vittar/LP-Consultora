/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroimg:
          "url('https://res.cloudinary.com/djiasfflw/image/upload/v1696857736/Proyecto%20LP/u0refj083o6dmycxkn0h.png')",
        heroimgsmall:
          "url('https://res.cloudinary.com/djiasfflw/image/upload/v1697239231/Proyecto%20LP/kkqdoknp2zjnkxhnvnnd.png')",
      },
      colors: {
        primary: "#F9F4F4",
      },
    },
  },
  plugins: [],
};
