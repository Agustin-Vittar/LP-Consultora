import React from "react";
import { motion } from "framer-motion";

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
      onClick={() => onClick(index)}
      className={`cursor-pointer flex flex-col justify-center items-center gap-[30px] w-[345px] h-[500px] ${
        expanded || allVisible ? "w-full" : "hidden"
      } z-40`}
    >
      {!expanded && (
        <div className="flex flex-col justify-center items-center gap-5 hover:-translate-y-1.5 duration-500">
          <motion.img transition={{ duration: 0.7 }} src={icon} alt="Íconos" />
          <motion.h2
            transition={{ duration: 0.7 }}
            className="text-center text-[36px] font-[400] whitespace-pre-line"
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
            className="text-[30px] font-[400] text-center p-10 z-40"
          >
            {text}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
