import React from "react";
import Layout from "@/components/layouts/Layout";
import MainCard from "@/components/common/MainCard";
import GetPackageCard from "@/components/common/GetPackageCard";
import Link from "next/link";
import Button from "@/components/ui/Button";

const GetPackage = () => {
  return (
    <Layout title="get-package">
      <div className="flex flex-col items-center">
        <MainCard
          text="Obtener paquetes"
          className="w-300"
          textColor="text-primary"
          backHref="/start-delivery"
        >
          <div className="flex flex-col items-center">
            <div className="border-dotted border-b border-gray-400 w-[270px] ">
              <a
                className="my-2 text-textColor hover:underline flex flex-col items-center text-center text-xs"
                href="/login"
              >
                ¿Cuántos paquetes repartirás hoy?
              </a>
            </div>

            <div className=" p-3">
              <div className="flex flex-col">
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
                <GetPackageCard text="Amenabar 6463, CABA" />
              </div>
            </div>
          </div>
        </MainCard>

        <div className="mt-0.5 p-8 flex justify-center">
          <Link href="/map-in-progress">
            <Button
              text="Iniciar jornada"
              className="bg-secondary text-primary hover:bg-alternative text-sm"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default GetPackage;
