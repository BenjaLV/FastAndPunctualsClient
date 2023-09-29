import React, { ReactNode } from "react";
import { BackButtonIcon } from ".";
import BackButton from "./BackButton";
interface Props {
  text: string;
  className?: string;
  textColor?: string;
  children: ReactNode;
  backHref: string;
  height?: string;
}

const Card = ({
  text,
  children,
  className,
  textColor,
  backHref,
  height,
}: Props) => {
  return (
    <div className={`flex flex-col items-center  text-textColor ${className}`}>
      <div className="flex items-center justify-between pb-8 px-0.5 bg-alternative shadow-md rounded-lg w-full  h-20">
        <div className="ml-3 mt-2">
          <BackButton href={backHref} />
        </div>
        <h3 className={`flex-1 text-center mr-6 font-bold ${textColor}`}>
          {text}
        </h3>
      </div>
      <div
        className={`-mt-8 bg-white shadow-md rounded-lg w-full box-border  overflow-y-auto  ${height}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
