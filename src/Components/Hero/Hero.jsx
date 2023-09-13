import React from "react";
import hero from "./hero.css";
const Hero = () => {
  return (
    <div className=" bg-heroimg bg-center bg-no-repeat bg-cover h-[90vh] flex justify-start items-center">
      <h1 className="p-10 title">
        Especialistas en <br />
        la selección y gestión <br />
        de talento.
      </h1>
    </div>
  );
};

export default Hero;
