import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/Logo footer.png";

const iconos = [
  {
    name: "Instagram",
    icon: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799596/Proyecto%20LP/ihhswejvcvjg0d1pc20m.png",
    link: "https://www.instagram.com/lpconsultora.cba/",
  },
  {
    name: "Whatsapp",
    icon: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/zd7mik37lsrf1ghbjngk.png",
    link: "https://wa.me/543512411979",
  },
  {
    name: "LinkedIn",
    icon: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/hydj93qpczogo6r8ftxw.png",
    link: "https://www.linkedin.com/company/lp-consultora/?originalSubdomain=ar",
  },
  {
    name: "Facebook",
    icon: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799596/Proyecto%20LP/zai5bsmm1ephzkppykim.png",
    link: "https://www.facebook.com/people/LP-Consultora/100070749852794/",
  },
];

const contactos = [
  {
    name: "Whatsapp",
    content: "+54 351 241-1979",
    link: "https://wa.me/543512411979",
  },
  {
    name: "Mail",
    content: "lara@lp-consultora.com",
    link: "",
  },
  {
    name: "LinkedIn",
    content: "lp-consultora",
    link: "",
  },
  {
    name: "Instagram",
    content: "lpconsultora.cba",
    link: "",
  },
  {
    name: "Facebook",
    content: "LP Consultora",
    link: "",
  },
];

export const Footer = () => {
  return (
    <footer
      id="contact"
      className={`flex justify-between mt-[15%] md:mt-[26%] xl:mt-[10%] items-start text-start mix-blend-multiply sm:p-12 ${styles.footer}`}
    >
      <div className="flex flex-col ml-3 pl-5 pb-2">
        <h2 className={`-ml-10 ${styles.title}`}>Contacto</h2>
        <ul className="list-disc text-[14px] sm:text-[26px]">
          {contactos.map((contact, index) => (
            <li key={index}>
              {contact.name}:{" "}
              <a href={contact.link} className="underline" target="_blank">
                {contact.content}
              </a>
            </li>
          ))}
          <li>Ubicación: Cordoba, Argentina.</li>
        </ul>
      </div>
      <div className={`${styles.menu}`}>
        <h2 className={`${styles.title}`}>Menú</h2>
        <ul className="text-[14px] sm:text-[26px]">
          <li>Nosotros</li>
          <li>Sumate</li>
          <li>Servicios</li>
          <li>Testimonios</li>
          <li>Cargá tu CV</li>
        </ul>
      </div>
      <div className={`flex  justify-between ${styles.iconscontainer}`}>
        <div className="gap-[24px] p-2 flex flex-row">
          {iconos.map((icon, index) => (
            <a
              href={icon.link}
              className="flex justify-center items-center "
              target="_blank"
              key={index}
            >
              <img className="" src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
        <div className="flex justify-end sm:mt-[5rem] ml-3 w-[50%] sm:w-[80%] ">
          <img
            className="md:w-auto min-[500px]:mt-10 min-[500px]:w-[60%] "
            src={logo}
            alt="Logo LP Consultora"
          />
        </div>
      </div>
    </footer>
  );
};
