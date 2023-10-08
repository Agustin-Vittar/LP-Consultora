import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <a
      href="https://hiringroom.com/jobs/get_vacancy/62d86434b9f90f34c1221820/candidates/new"
      target="_blank"
      className={`relative text-[#fff] text-xl lg:text-base py-[11.25px] px-[15.75px] rounded-[46.5px] cursor-pointer z-[1] ${styles.customButton}`}
    >
      {props.buttonText}
    </a>
  );
};

export default Button;
