import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ServiceCardMobile.css";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

const ServiceCardMobile = ({ title, icon, text }) => {
  const [expanded, setExpanded] = useState(false);

  const formattedTitle = title.replace(/ ([^ ]+)$/, "\n$1");

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.7, type: "spring" } }}
      className={`service-card-mobile w-[90%]  ${expanded ? "expandido" : ""}`}
      onClick={handleCardClick}
    >
      <motion.div layout="position" className="card-content">
        <motion.img src={icon} alt="" className="card-icon" />
        <motion.h1 className="card-title">{formattedTitle}</motion.h1>
        {expanded ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
      </motion.div>
      {expanded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="card-text">{text}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCardMobile;
