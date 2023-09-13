import React from "react";

const Button = (props) => {
  return (
    <a
      href=""
      className={`bg-[${props.bgColor}] text-[${props.textColor}] text-xl lg:text-base py-[11.25px] px-[15.75px] rounded-[46.5px] shadow-sm hover:bg-[#6376cf] duration-500`}
    >
      {props.buttonText}
    </a>
  );
};

export default Button;
