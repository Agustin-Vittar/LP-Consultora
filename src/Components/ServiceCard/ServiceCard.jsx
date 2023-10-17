import React from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

const ServiceCard = ({
  title,
  text,
  icon,
  index,
  expanded,
  onClick,
  allVisible,
}) => {
  const words = title.split(" ");

  let formattedTitle;

  // Aplicar un salto de línea después de la primera palabra si hay 2 palabras
  if (words.length === 2) {
    formattedTitle = `${words[0]} \n${words[1]}`;
  }
  // Aplicar un salto de línea después de la segunda palabra si hay 3 palabras
  else if (words.length === 3) {
    formattedTitle = `${words[0]} ${words[1]} \n${words[2]}`;
  }
  // Si hay más de 3 palabras, aplicar un salto de línea después de la segunda palabra
  else {
    formattedTitle = `${words[0]} ${words[1]} \n${words.slice(2).join(" ")}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: expanded || allVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col justify-center items-center gap-[30px] w-[345px] h-[500px] ${
        expanded || allVisible ? "w-full" : "hidden"
      } z-40`}
    >
      {!expanded && (
        <div
          onClick={() => onClick(index)}
          className="flex flex-col justify-center items-center gap-5 hover:-translate-y-1.5 duration-500 cursor-pointer "
        >
          <motion.img transition={{ duration: 0.7 }} src={icon} alt="Íconos" />
          <motion.h2
            transition={{ duration: 0.7 }}
            className="text-center text-[30px] lg:text-[36px] font-[400] whitespace-pre-line"
          >
            {formattedTitle}
          </motion.h2>
        </div>
      )}
      {expanded && (
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: expanded || allVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[28px] lg:text-[30px] font-[400] text-start p-10 z-40 mt-8"
          >
            {text}
          </motion.p>
          <div className="flex flex-col">
            <div
              className="flex justify-center items-center gap-1 cursor-pointer hover:-translate-y-1 duration-500"
              onClick={() => onClick(index)}
            >
              <BiArrowBack size={35}></BiArrowBack>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
