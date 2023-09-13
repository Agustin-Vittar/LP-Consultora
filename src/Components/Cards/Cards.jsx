import React from "react";
import styles from "./Card.css";
import { Joinbutton } from "../JoinButton/Joinbutton.jsx";

export const Cards = ({ buttonText, bgImg }) => {
  return (
    <div className="w-[400px] h-[620px] ">
      <div
        className="bg-gray-300 h-[90%] cardBox"
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
