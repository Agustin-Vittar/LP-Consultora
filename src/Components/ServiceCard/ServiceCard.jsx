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
        <>
          <motion.img transition={{ duration: 0.7 }} src={icon} alt="Íconos" />
          <motion.h2
            transition={{ duration: 0.7 }}
            className="text-center text-[36px] font-[400]"
          >
            {title}
          </motion.h2>
        </>
      )}
      {expanded && (
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: expanded || allVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] font-[400] text-center z-40"
          >
            {text}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
