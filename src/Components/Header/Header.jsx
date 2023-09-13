import { React, useState } from "react";
import Logo from "../../assets/logo LP-final-02 1.svg";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import Button from "../Button/Button.jsx";

export const Header = () => {
  const Links = [
    { name: "Nosotros", link: "/" },
    { name: "Sumate", link: "/" },
    { name: "Servicios", link: "/" },
    { name: "Testimonios", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-primary p-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center lg:w-1/4">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {Links.map((link) => (
                <a
                  key={link.name}
                  className="hover:text-gray-400 duration-500 px-3 py-2 text-xl lg:text-base"
                  href={link.link}
                >
                  {link.name}
                </a>
              ))}
              <Button
                textColor="#fff"
                bgColor="#C205A1"
                buttonText="Cargá tu CV"
              ></Button>
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
        <div className="lg:hidden text-center ">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 grid items-center justify-center h-[90vh]">
            {Links.map((link) => (
              <a
                key={link.name}
                className=" hover:text-gray-400 block px-3 py-2 text-xl"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
            <Button>Cargá tu CV</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};
