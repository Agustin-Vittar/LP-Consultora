import React from "react";
import styles from "./JoinButton.css";

export const Joinbutton = (prop) => {
  return (
    <div>
      <a
        href={prop.linkDirection}
        target="_blank"
        className={`bg-[#FFFDFD] text-[#E326BE] button`}
      >
        {prop.buttonText1}
      </a>
    </div>
  );
};
