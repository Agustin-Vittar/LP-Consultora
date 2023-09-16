import React from "react";
import styles from "./Button.css";

const Button = (props) => {
  return (
    <a
      className={`bg-[#C205A1] text-[#fff] text-xl lg:text-base py-[11.25px] px-[15.75px] rounded-[46.5px] shadow-sm cursor-pointer bu`}
    >
      {props.buttonText}
    </a>
  );
};

export default Button;
