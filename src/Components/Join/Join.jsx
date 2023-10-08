import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import styles from "./Join.module.css";

const img1 = "src/assets/Cardimg1.png";
const img2 = "src/assets/Cardimg2.png";

export const Join = () => {
  return (
    <div
      id="join"
      className={`h-auto xl:h-[90vh] relative z-40 ${styles.fondo}`}
    >
      <div className="flex justify-center items-end h-[15vh] ">
        <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] p-5">
          Sumate
        </h1>
      </div>
      <div className="flex items-center justify-center m-2 gap-[1rem] sm:gap-[2rem] md:gap-[5rem] xl:gap-[10rem]">
        <Cards
          bgImg={img1}
          buttonText="Cargá tu CV"
          linkDirection={
            "https://hiringroom.com/jobs/get_vacancy/62d86434b9f90f34c1221820/candidates/new"
          }
        ></Cards>
        <Cards
          bgImg={img2}
          buttonText="Busco talento"
          linkDirection={"https://lpconsultora.hiringroom.com/jobs"}
        ></Cards>
      </div>
    </div>
  );
};
