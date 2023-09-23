import React, { useState } from "react";
import { PackageIcon, TrashIcon } from ".";

interface Props {
  status: string;
  className?: string;
  address: string;
  packageID: string;
}

const SmallCard = ({ status, className, address, packageID }: Props) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(status !== "Entregado");

  const toggleDeleteIcon = () => {
  
    if (status !== "Entregado") {
      setShowDeleteIcon(!showDeleteIcon);
    }
  };

  return (
    <div className="bg-white border rounded-lg border-textColor h-20 w-[270px] flex items-center overflow-hidden">
      <div className="border-r border-blue-500">
        <PackageIcon />
      </div>
      <div className="grid grid-cols-2 flex-grow">
        <div className="text-textColor text-xs ml-4">
          <p className="font-bold">{packageID}</p>
          <p>{address}</p>
        </div>
        <div className="text-textColor relative">
          <div
            onMouseEnter={toggleDeleteIcon}
            onMouseLeave={toggleDeleteIcon}
            className={` ${className} text-textColor text-xs text-center rounded-full font-bold h-[15px] w-[81px] ml-4`}
          >
            {status}
            <div className="mt-4 ml-14 absolute">
              <TrashIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
