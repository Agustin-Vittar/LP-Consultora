/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroimg:
          "url('https://res.cloudinary.com/djiasfflw/image/upload/v1696799809/Proyecto%20LP/r0io9s72egn8chuabdya.png')",
      },
      colors: {
        primary: "#F9F4F4",
      },
    },
  },
  plugins: [],
};
