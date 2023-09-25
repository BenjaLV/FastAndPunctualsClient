import React from "react";
import Amount from "../common/Amount";
import Date from "../common/Date";
import Button from "./Button";

const FormAddPackages = () => {
  return (
    <div>
      <div className=" w-full ">
        <form className="rounded px-5 pt-4  sm:w-full mt-14 text-xs">
          <div className="mb-6 w-full">
            <input
              className=" pb-2 pr-2 border-b border-primary  outline-none bg-inherit w-full  placeholder-primary"
              type="text"
              name="email"
              id="email"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-6">
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
          <div className="grid grid-cols-2 divide-x divide-primary mb-[146px] ">
            <div className=" ">
              <Date />
            </div>
            <div className=" ">
              <Amount />
            </div>
          </div>
          <div className="flex items-center ">
            <Button
              text="Agregar"
              className="bg-secondary text-primary text-sm w-full "
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddPackages;
