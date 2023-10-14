import React from "react";

const TestimonialsCard = ({ text, name, process }) => {
  return (
    <div className="text-[#50555C] flex flex-col w-full xl:w-[500px] py-2 px-4 justify-center z-40 gap-[8px] mb-12">
      <p className="text-[14px] xl:text-[18px] text-start sm:text-start">
        {text}
      </p>
      <div className="text-right w-full">
        <h3 className="text-[16px] font-[600]">{name}</h3>
        <h3 className="text-[16px] italic">Proceso: {process}</h3>
      </div>
    </div>
  );
};

export default TestimonialsCard;
