import React, { useState } from "react";
import Logo from "../../assets/logo LP-final-02 1.svg";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import Button from "../Button/Button.jsx";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const Links = [
    { name: "Nosotros", link: "about" },
    { name: "Sumate", link: "join" },
    { name: "Servicios", link: "services" },
    { name: "Testimonios", link: "testimonials" },
    { name: "Contacto", link: "contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(!showMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="bg-primary p-4 sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center lg:w-1/4">
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-96}
              duration={500}
            >
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {Links.map((link) => (
                <Link
                  key={link.name}
                  className="relative group px-3 py-2 text-xl lg:text-base hover:text-gray-500 duration-500 cursor-pointer"
                  activeClass="active"
                  onClick={handleClose}
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                >
                  {link.name}
                  <div className="absolute w-full h-0.5 bg-[#C205A1] transform translate-y-1/2 left-0 group-hover:scale-x-100 transition-transform origin-left duration-500 scale-x-0"></div>
                </Link>
              ))}
              <Button buttonText="Cargá tu CV" />
            </div>
          </nav>
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={handleNav}
              className="inline-flex items-center justify-center p-2 text-black text-3xl"
            >
              {showMenu ? <RiCloseLine /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMenu ? (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden text-center origin-top"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 grid items-center justify-center h-[80vh]"
            >
              {Links.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    initial="initial"
                    animate="open"
                  >
                    <Link
                      className="relative group hover:text-gray-500 block px-3 py-2 text-xl cursor-pointer"
                      activeClass="active"
                      onClick={handleClose}
                      to={link.link}
                      spy={true}
                      smooth={true}
                      offset={-770}
                      duration={500}
                    >
                      {link.name}
                      <div className="absolute w-full h-0.5 bg-[#C205A1] transform translate-y-1/2 left-0 group-hover:scale-x-100 transition-transform origin-left duration-300 scale-x-0"></div>
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                <Button buttonText="Cargá tu CV" />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
