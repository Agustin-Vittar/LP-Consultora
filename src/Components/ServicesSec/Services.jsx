import React, { useEffect, useState } from "react";
import Icono1 from "../../assets/Icono1.png";
import Icono2 from "../../assets/Icono2.png";
import Icono3 from "../../assets/Icono3.png";
import alasuperior from "../../assets/Mariposa superior.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceCardMobile from "../ServiceCardMobile/ServiceCardMobile";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [allVisible, setAllVisible] = useState(true);
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

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setAllVisible(true);
    } else {
      setExpandedIndex(index);
      setAllVisible(false);
    }
  };

  const serviceData = [
    {
      title: "Selección de personal",
      text: "Realizamos procesos de selección end to end, comprometidos con ambas partes, la empresa y los candidatos, futuros colaboradores. Brindamos soluciones a las necesidades de las empresas por medio de un trabajo de relevamiento detallista y comprometido, como paso previo a su inicio, a fines de obtener resultados satisfactorios en el menor tiempo posible y con el mayor impacto positivo para la resolución del proceso. Procuramos que el proceso de selección sea una experiencia amena e -incluso- de crecimiento y aprendizaje para las personas que participan en el. Para ello, brindamos un acompañamiento cercano, empático y comprometido a los candidatos.",
      icon: Icono1,
    },
    {
      title: "Consultoría en RRHH",
      text: "Realizamos procesos de diagnóstico organizacional que nos permita proponer acciones de mejoras en los procesos evaluados.",
      icon: Icono2,
    },
    {
      title: "Evaluaciones psicotécnicas",
      text: "Realizamos evaluaciones con técnicas y tests psicológicos que nos ayuden a conocer y definir el grado de desarrollo de las competencias requeridas para cada posición y la adecuación del candidato evaluado para con el puesto en cuestión. Evaluaciones de potencial a partir de la teoría de Elliot Jacques, a fines de conocer el grado de competencias y habilidades de los candidatos, a fines de determinar su potencial para desarrollarse en puestos de mayor jerarquía y responsabilidad.",
      icon: Icono3,
    },
  ];

  return (
    <div name="services" id="services" className=" relative">
      <img
        src={alasuperior}
        className={`absolute opacity-20 right-0 z-0 md:w-[65.7rem] w-[24.6rem] top-[400px] md:-top-36 `}
      />
      <div className="flex justify-center items-end h-[15vh]">
        <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] p-1 z-40">
          Nuestros Servicios
        </h1>
      </div>
      <div className="flex flex-col min-[801px]:flex-row justify-center md:justify-between">
        {isMobile
          ? serviceData.map((service, index) => (
              <ServiceCardMobile
                key={index}
                title={service.title}
                text={service.text}
                icon={service.icon}
              />
            ))
          : serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                text={service.text}
                icon={service.icon}
                index={index}
                expanded={expandedIndex === index}
                onClick={handleCardClick}
                allVisible={allVisible}
              />
            ))}
      </div>
    </div>
  );
};

export default Services;
