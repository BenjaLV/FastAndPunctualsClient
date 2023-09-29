import { MinusCircle, PlusCircule } from "@/components/common";

import { useState } from "react";
import React from "react";

const Amount = () => {
  const [amount, setAmount] = useState(0);

  const handleSubtract = () => {
    if (amount > 0) return setAmount(amount - 1);
  };

  const handleAdd = () => {
    return setAmount(amount + 1);
  };
  return (
    <div className="w-32 ml-3.5">
      <div className="mb-2">Cantidad:</div>
      <div className="border border-primary rounded-lg h-[35px] flex justify-center items-center w-[115px]">
        <div className="flex justify-center items-center border border-colorText rounded-lg h-[26px] w-[68px]">
          <button onClick={handleSubtract}>
            <MinusCircle className="mx-1" />
          </button>
          <p className="text-colorText mx-1">{amount}</p>
          <button onClick={handleAdd}>
            <PlusCircule className="mx-1"></PlusCircule>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amount;
