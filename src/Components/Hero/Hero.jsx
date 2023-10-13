import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      name="hero"
      id="hero"
      className={`bg-heroimg bg-cover bg-center h-[90vh] flex justify-start sm:justify-start items-start sm:items-center ${styles.imgfondo}`}
    >
      <h1 className={`p-10 ${styles.title}`}>
        Especialistas en la <br />
        selección y gestión <br />
        de talento.
      </h1>
    </div>
  );
};

export default Hero;
