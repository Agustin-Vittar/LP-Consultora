import React from "react";
import styles from "./Card.module.css";
import { Joinbutton } from "../JoinButton/Joinbutton.jsx";
import icono from "../../assets/ícono.svg";

export const Cards = ({ buttonText, bgImg, linkDirection }) => {
  return (
    <div className={`relative ${styles.card}`}>
      <div className=" absolute -top-10 left-1/2 -translate-x-1/2 ">
        <div>
          <img src={icono} alt="Ícono de hoja" />
        </div>
      </div>
      <div
        className={`h-[90%] ${styles.cardBox}`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="text-center -mt-7 ">
        <Joinbutton
          buttonText1={buttonText}
          linkDirection={linkDirection}
        ></Joinbutton>
      </div>
    </div>
  );
};
