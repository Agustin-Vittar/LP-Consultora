import React, { useState } from "react";
import Logo from "../../assets/logo LP-final-02 1.svg";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import Button from "../Button/Button.jsx";

export const Header = () => {
  const Links = [
    { name: "Nosotros", link: "#about" },
    { name: "Sumate", link: "#join" },
    { name: "Servicios", link: "#services " },
    { name: "Testimonios", link: "#testimonials" },
    { name: "Contacto", link: "#contact" },
  ];

  const calculateScrollPosition = (target) => {
    const element = document.querySelector(target);

    if (element) {
      const headerHeight = document
        .querySelector("header")
        .getBoundingClientRect().height;
      const elementPosition = element.offsetTop;
      return elementPosition - headerHeight;
    }
    return 0; // O cualquier valor predeterminado si el elemento no se encuentra
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const scrollPosition = calculateScrollPosition(target);

    window.scrollTo({
      left: 0,
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-primary p-4 sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center lg:w-1/4">
            <a href="#hero" onClick={handleClick} className="cursor-pointer">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {Links.map((link) => (
                <a
                  key={link.name}
                  className="relative group px-3 py-2 text-xl lg:text-base hover:text-gray-500 duration-500"
                  href={link.link}
                  onClick={handleClick}
                >
                  {link.name}
                  <div className="absolute w-full h-0.5 bg-[#C205A1] transform translate-y-1/2 left-0 group-hover:scale-x-100 transition-transform origin-left duration-500 scale-x-0"></div>
                </a>
              ))}
              <Button buttonText="Cargá tu CV" />
            </div>
          </nav>
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="inline-flex items-center justify-center p-2 text-black text-3xl"
            >
              {showMenu ? <RiCloseLine /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="lg:hidden text-center">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 grid items-center justify-center h-[90vh]">
            {Links.map((link) => (
              <a
                key={link.name}
                className="relative group hover:text-gray-500 block px-3 py-2 text-xl"
                href={link.link}
              >
                {link.name}
                <div className="absolute w-full h-0.5 bg-[#C205A1] transform translate-y-1/2 left-0 group-hover:scale-x-100 transition-transform origin-left duration-300 scale-x-0"></div>
              </a>
            ))}
            <Button buttonText="Cargá tu CV" />
          </div>
        </div>
      ) : null}
    </header>
  );
};
