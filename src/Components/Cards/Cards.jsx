import React from "react";
import styles from "./Card.css";
import { Joinbutton } from "../JoinButton/Joinbutton.jsx";
import icono from "../../assets/ícono.svg";

export const Cards = ({ buttonText, bgImg }) => {
  return (
    <div className="w-[400px] h-[620px] relative ">
      <div className=" absolute -top-10 left-1/2 -translate-x-1/2 ">
        <div>
          <img src={icono} alt="" />
        </div>
      </div>
      <div
        className=" h-[90%] cardBox"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="text-center -mt-7">
        <Joinbutton buttonText1={buttonText}></Joinbutton>
      </div>
    </div>
  );
};
