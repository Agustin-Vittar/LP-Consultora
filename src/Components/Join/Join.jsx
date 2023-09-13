import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import styles from "./Join.css";

const img1 = "src/assets/Cardimg1.png";
const img2 = "src/assets/Cardimg2.png";

export const Join = () => {
  return (
    <div className="h-[100vh] fondo">
      <div className="flex justify-center items-end h-[15vh] ">
        <h1 className="text-[52px] ">Sumate</h1>
      </div>
      <div className="h-[70vh] flex items-center justify-center gap-[15rem]">
        <Cards bgImg={img2} buttonText="Cargá tu CV"></Cards>
        <Cards bgImg={img1} buttonText="Busco talento"></Cards>
      </div>
    </div>
  );
};
