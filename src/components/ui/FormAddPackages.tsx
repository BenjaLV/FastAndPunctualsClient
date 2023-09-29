import React from "react";
import Amount from "../common/Amount";
import Date from "../common/Date";
import Button from "./Button";

const FormAddPackages = () => {
  return (
    <div>
      <form className="rounded px-5 mt-16 text-xs">
        <div className="flex flex-col justify-center">
          <div className="mb-7">
            <input
              className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
              type="text"
              name="email"
              id="email"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-7">
            <input
              className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
              type="text"
              name="email"
              id="email"
              placeholder="Nombre de quien recibe"
            />
          </div>
          <div className="mb-12">
            <input
              className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
              type="text"
              name="email"
              id="email"
              placeholder="Peso del paquete (kg)"
            />
          </div>
          <div className="flex divide-x divide-primary mb-[135px] ">
            <div className=" ">
              <Date />
            </div>
            <div className=" ">
              <Amount />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <Button
            text="Agregar"
            className="bg-secondary text-primary text-sm w-full mt-1"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddPackages;
