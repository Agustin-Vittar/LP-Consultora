import React, { useEffect, useState } from "react";
import alainferior from "../../assets/Mariposa inferior.png";

const logos = [
  {
    logo: "./src/assets/Soapboxx 1.png",
    smallLogo: "./src/assets/Soapboxx 1 small.png",
    name: "./src/assets/Soapboxx 2.png",
    smallName: "./src/assets/Soapboxx 2 small.png",
    link: "https://www.soapboxx.com",
  },
  {
    logo: "./src/assets/Foodshed.io.png",
    smallLogo: "./src/assets/Foodshed.io small.png",
    name: "./src/assets/Foodshed.io 1.png",
    smallName: "./src/assets/Foodshed.io 1 small.png",
    name2: "./src/assets/Powered By.png",
    smallName2: "./src/assets/Powered By small.png",
    link: "https://www.foodshed.io",
  },
  {
    name: "./src/assets/Herracenter.png",
    smallName: "./src/assets/Herracenter small.png",
    link: "http://www.herracenter.com.ar/public/",
  },
  {
    name: "./src/assets/Pintecord.png",
    smallName: "./src/assets/Pintecord small.png",
    link: "https://www.pintecord.com.ar",
  },
  {
    logo: "./src/assets/Vieites logo.png",
    smallLogo: "./src/assets/Vieites logo small.png",
    name: "./src/assets/Vieites.png",
    smallName: "./src/assets/Vieites small.png",
    link: "http://vieiteshnos.com.ar",
  },
  {
    name: "./src/assets/Wise cx.png",
    smallName: "./src/assets/Wise cx small.png",
    link: "https://wisecx.com",
  },
];

const TrustBanner = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative mt-[100px] md:mt-[200px]">
      <img
        src={alainferior}
        className={`absolute opacity-20 right-0 top-[30px] z-0 w-[19.2rem] :w-[58.3rem] `}
      />
      <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] pb-12 text-center ">
        Confían en nosotros
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-5 ">
        {logos.map((logo, index) => (
          <div className="z-40 p-5 justify-center flex " key={index}>
            <a
              target="_blank"
              href={logo.link}
              className="flex justify-center items-center gap-[1.25rem] "
            >
              <img
                src={smallScreen ? logo.smallLogo : logo.logo}
                className=""
                alt=""
              />
              <div className="flex-col">
                <img
                  src={smallScreen ? logo.smallName2 : logo.name2}
                  className="mb-2"
                  alt=""
                />
                <img
                  src={smallScreen ? logo.smallName : logo.name}
                  className=""
                  alt=""
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
