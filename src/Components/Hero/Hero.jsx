import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      name="hero"
      id="hero"
      className={`bg-heroimgsmall sm:bg-heroimg bg-cover bg-center h-[90vh] flex justify-end text-end sm:text-start sm:justify-start items-start sm:items-end ${styles.imgfondo}`}
    >
      {isMobile ? (
        <h1 className={`p-5 ${styles.title}`}>
          Especialistas en <br />
          la selección y <br /> gestión de
          <br /> talento.
        </h1>
      ) : (
        <h1 className={`${styles.title}`}>
          Especialistas en la <br />
          selección y gestión <br />
          de talento.
        </h1>
      )}
    </div>
  );
};

export default Hero;
