import React from "react";

const Date = () => {
  return (
    <div className="w-32">
      <div className="mb-2">Fecha de entrega:</div>
      <div>
        <input
          type="date"
          name="date"
          className="border border-primary rounded-lg outline-none px-1 py-2 w-[115px]"
        ></input>
      </div>
    </div>
  );
};

export default Date;
