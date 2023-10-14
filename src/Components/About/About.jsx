import React from "react";
import ala from "../../assets/Ala.svg";

export const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="bg-primary relative overflow-hidden min-h-full"
    >
      <img
        src={ala}
        alt="ala"
        className="opacity-20 absolute left-0 -top-10 w-[964px] h-[768px] z-0"
      />
      <div className="h-full flex items-center justify-center text-[#000] flex-col p-5 md:p-20 lg:p-20 gap-5 md:gap-12 relative z-10">
        <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] text-center">
          Quiénes somos
        </h1>
        <p className="text-[16px] md:text-[28px] lg:text-[32px]">
          Somos un equipo de profesionales formados en RRHH y psicología, que
          compartimos los mismos valores a la hora de trabajar: buscamos que el
          encuentro de -al menos dos- se produzca en un marco de respeto y
          confianza mutua. Para ello, nos formamos de manera constante y
          comprometida, para alcanzar las mejores prácticas.
        </p>
        <p className="text-[16px] md:text-[28px] lg:text-[32px]">
          Trabajamos con empresas nacionales e internacionales, seleccionando
          talentos de comercio e industria y del mundo IT.
        </p>
      </div>
    </div>
  );
};
