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
    <div className="ml-6">
      <div className="mb-2">Cantidad:</div>
      <div className="border border-primary rounded-lg h-[35px] flex justify-center items-center w-[115px]">
        <div className="flex justify-center items-center border border-colorText rounded-lg h-[26px] w-[68px]">
          <button onClick={handleSubtract}>
            <img
              className="h-3 w-3 mr-2"
              src="/minusCircle.svg"
              alt="minusCircle"
            />
          </button>
          <p className="text-colorText">{amount}</p>
          <button onClick={handleAdd}>
            <img
              className="h-3 w-3 ml-2"
              src="/plus-circle.svg"
              alt="plus-circle"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amount;
