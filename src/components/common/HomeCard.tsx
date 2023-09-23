import React, { useState } from "react";
import { ArrowIcon } from ".";

interface Props {
  paquetes: number;
  text: string;
  className: string;
  children: React.ReactNode;
}

const HomeCard = ({ paquetes, text, className, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={` ${className} rounded-[10px] bg-cardColor shadow-md overflow-x-hidden overflow-y-auto ${
        isExpanded ? "h-[500px]" : "h-[200px]"
      }`}
      style={{ boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.24)" }}
    >
      <div className="p-2 ml-2">
        <div className="flex items-center">
          <h1 className="text-base font-semibold leading-5 text-left text-textColor">
            {text}
          </h1>
          <div className="ml-[99px]" onClick={toggleExpansion}>
            <ArrowIcon className="" />
          </div>
        </div>
        <h3 className="text-xs font-normal leading-5 text-left text-textColor">
          {paquetes ? `${paquetes} entregados` : "Sin repartos pendientes"}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center  mb-4 space-y-3"> 
        {children}
      </div>
    </div>
  );
};

export default HomeCard;
