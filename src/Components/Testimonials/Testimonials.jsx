import React, { useEffect, useState } from "react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Testimonials.css";

const Testimonials = () => {
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

  const testimonios = [
    {
      text: '"Mi experiencia con la consultora fue maravillosa. La amabilidad, el trato y la cordialidad de las personas que avalaron mi proceso, fue excelente. Solo palabras de agradecimiento a Lara Ponce y María Paula Lobos, que fueron fundamentales para lograr el objetivo."',
      name: "Adrián Lerner",
      process: "cajero",
    },
    {
      text: '"Quería agradecer a LP consultora por acompañarme en este proceso de cambio laboral. Donde me sentí muy acompañado con consejos siempre con una mirada humana y estando al tanto de todos los pasos que fui dando y luego de mi inicio de este nuevo camino siguiendo en contacto con migo para ver cualquier necesidad que pueda tener. Muchas gracias."',
      name: "Matias Courroux",
      process: "supervisor comercial",
    },
    {
      text: '"Gracias a los chicos de LP consultora pude conseguir el trabajo en donde estoy actualmente como ejecutivo de cuentas. Me acompañaron en todo el proceso de reclutamiento, incluso una vez pasado ese proceso me seguían escribiendo para saber cómo iba en el nuevo trabajo. Los súper recomiendo, son muy buenos profesionales y siempre comprometidos en acompañarte!"',
      name: "Denise Mafía",
      process: "ejecutivo de cuentas",
    },
  ];

  const customRenderIndicator = (onClickHandler, isSelected, index, label) => {
    const defStyle = {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      margin: "5px",
      backgroundColor: "#50555C",
      cursor: "pointer",
    };

    const activeStyle = {
      ...defStyle,
      backgroundColor: "#00ECFF",
    };

    return (
      <div
        className="inline-block"
        style={isSelected ? activeStyle : defStyle}
        onClick={onClickHandler}
        aria-label={`${label} ${index + 1}`}
        role="button"
        tabIndex={0}
      />
    );
  };

  return (
    <div id="testimonials">
      <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] pb-12 text-center">
        Testimonios
      </h1>
      <div
        className={
          isMobile
            ? "flex flex-col"
            : "flex flex-row w-full justify-center items-start gap-[16px] md:gap-[8px]"
        }
      >
        {isMobile ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            renderIndicator={customRenderIndicator}
          >
            {testimonios.map((testimonials, index) => (
              <TestimonialsCard
                key={index}
                text={testimonials.text}
                name={testimonials.name}
                process={testimonials.process}
              />
            ))}
          </Carousel>
        ) : (
          testimonios.map((testimonials, index) => (
            <TestimonialsCard
              key={index}
              text={testimonials.text}
              name={testimonials.name}
              process={testimonials.process}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonials;
