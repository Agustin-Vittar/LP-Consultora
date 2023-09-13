import React from "react";
import ala from "../../assets/Ala.svg";

export const About = () => {
  return (
    <div id="about" className="h-[100vh] bg-primary relative overflow-hidden">
      <img
        src={ala}
        alt="ala"
        className="opacity-20 absolute left-0 -top-10 w-[964px] h-[768px] z-0"
      />
      <div className="h-full flex items-center justify-center text-[#000] flex-col p-20 gap-12 relative z-10">
        <h1 className="text-[52px] sm:text-[2.2rem]">Quienes somos</h1>
        <p className="text-[32px] sm:text-[1.5rem]">
          Somos un equipo de profesionales formados en RRHH y psicología, que
          compartimos los mismos valores a la hora de trabajar: buscamos que el
          encuentro de -al menos dos- se produzca en un marco de respeto y
          confianza mutua. Para ello, nos formamos de manera constante y
          comprometida, para alcanzar las mejores prácticas. Trabajamos con
          empresas nacionales e internacionales, seleccionando talentos de
          comercio e industria y del mundo IT.
        </p>
      </div>
    </div>
  );
};
