import React, { useEffect, useState } from "react";
import alainferior from "../../assets/Mariposa inferior.png";

const logos = [
  {
    logo: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/yl6nnlsd9ymncpbsxntr.png",
    smallLogo:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/adaf1ijsbt5ndwzxphvn.png",
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/wcpbiuhrba5kbm1dqluh.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/qqcecimjz5tpn57cca4g.png",
    link: "https://www.soapboxx.com",
  },
  {
    logo: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799596/Proyecto%20LP/pzcl4ylpsxghgpszn7ol.png",
    smallLogo:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/zm49zljqy6tf4gfkvzzx.png",
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799601/Proyecto%20LP/m5p8qvxainbvl76vwcax.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/qu0si2ikaapqeop6tpez.png",
    name2:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/crvy6powq3kfia8fotrv.png",
    smallName2:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/ze7h0ypeveoa2vjgtbuj.png",
    link: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/crvy6powq3kfia8fotrv.png",
  },
  {
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799602/Proyecto%20LP/q1hxc04g8bsew2ahbyea.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799595/Proyecto%20LP/unbmfgla96fmovszmrpw.png",
    link: "http://www.herracenter.com.ar/public/",
  },
  {
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799596/Proyecto%20LP/kmiweuybjzylafaoys1v.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/olliiyjfuofzfglcsk5k.png",
    link: "https://www.pintecord.com.ar",
  },
  {
    logo: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/tt6mixwfc0jivjqkiway.png",
    smallLogo:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/rr0fuomn82rlrpmfmu5j.png",
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/ct6bq1fab1fwsutn3ojq.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/xmwliqqbfeooxjadgxac.png",
    link: "http://vieiteshnos.com.ar",
  },
  {
    name: "https://res.cloudinary.com/djiasfflw/image/upload/v1696799598/Proyecto%20LP/q67rjtpq9guooyvkfici.png",
    smallName:
      "https://res.cloudinary.com/djiasfflw/image/upload/v1696799594/Proyecto%20LP/kznbspduyqyjo2j0s8p9.png",
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
        className={`absolute opacity-20 right-0 top-[30px] z-0 w-[19.2rem] md:w-[58.3rem] `}
      />
      <h1 className="text-[24px] md:text-[32px] lg:text-[52px] font-[700] pb-12 text-center ">
        Confían en nosotros
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-5">
        {logos.map((logo, index) => (
          <div className="z-40 p-5 flex justify-center" key={index}>
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
                  className="w-full"
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
