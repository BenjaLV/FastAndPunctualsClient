import MainCard from "@/components/common/MainCard";
import Layout from "@/components/layouts/Layout";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

interface Props {
  addres: string;
  packageID: string;
  user: string;
}

const MapInProgress = ({ addres, packageID, user }: Props) => {
  return (
    <Layout title="delivery-addres">
      <div className="flex flex-col items-center">
        <MainCard
          text="Reparto en curso"
          backHref="/get-package"
          className="w-300"
          height="h-450"
        >
          <div className="p-8">
            <img src="./maps.png" alt="maps"></img>
            <div className="flex flex-col space-y-2 mt-6 ">
              <div className="flex">
                <h3 className=" text-xs font-bold">Destino : </h3>
                <p className=" text-xs pl-1"> {addres} Amenabar 2356, CABA </p>
              </div>
              <div className="flex">
                <h3 className="text-xs font-bold">Numero de paquete : </h3>
                <p className=" text-xs pl-1"> {packageID} #0A235D</p>
              </div>
              <div className="flex">
                <h3 className=" text-xs font-bold">Recibe : </h3>
                <p className=" text-xs pl-1"> {user} David Rodriguez</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/" legacyBehavior>
              <Button
                text="Finalizar"
                className="bg-secondary text-primary text-sm hover:bg-alternative"
              />
            </Link>
          </div>
        </MainCard>
        <div className="mt-0.5 p-8 flex justify-center">
          <Link href="/get-package">
            <Button
              text="Cancelar entrega"
              className="bg-inherit text-white border border-secondary hover:bg-secondary hover:text-primary text-sm"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default MapInProgress;
