import React from "react";
import hero from "./hero.css";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`bg-heroimg bg-cover bg-center h-[90vh] flex justify-start items-center`}
    >
      <h1 className="p-10 title">
        Especialistas en la <br />
        selección y gestión <br />
        de talento.
      </h1>
    </div>
  );
};

export default Hero;
