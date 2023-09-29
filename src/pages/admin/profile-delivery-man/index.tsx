import React from "react";
import Layout from "@/components/layouts/Layout";
import MainCard from "@/components/common/MainCard";
import HomeCard from "@/components/common/HomeCard";
import SmallCard from "@/components/common/SmallCard";
import { Avatar } from "@nextui-org/react";
import ToggleSwitch from "@/components/common/ToggleSwitch";
interface Props {
  user: string;
  packages: string;
  deliveryman: string;
  image?: string;
}

const ProfileDeliveryMan = ({ user, image }: Props) => {
  return (
    <>
      <Layout title="Add-Package">
        <MainCard
          text="Perfil de repartidor"
          className="w-300"
          backHref=""
          height="h-20"
        >
          <div className="  p-2 pt-3">
            <div className="flex items-center justify-between">
              <div>
                <Avatar
                  src={image}
                  name={user}
                  className="bg-alternative w-14 h-14 "
                />
              </div>
              <div className="w-40">
                <div className="text-textColor font-bold text-sm">FARID</div>
                <div className="bg-deliverydp text-textColor text-center text-xs h-[15px] w-[81px] rounded-full font-bold ">
                  En Curso
                </div>
              </div>
              <div className=" flex flex-row-reverse col-start-6">
                <ToggleSwitch></ToggleSwitch>
              </div>
            </div>
          </div>
        </MainCard>
        <HomeCard
          text="Repartos pendientes"
          className="w-[300px]  mt-4"
        ></HomeCard>
        <HomeCard
          paquetes={2}
          text="Historial de repartos"
          className="w-[300px]  mt-4"
        >
          <SmallCard
            packageID={"#0B438"}
            status="Inactivo"
            address="AV. Carabobo y Rivadavia, CABA"
            className="bg-inactive"
          />
          <SmallCard
            packageID={"#0B438"}
            status="Entregado"
            address="AV. Carabobo y Rivadavia, CABA"
            className="bg-deliverydp"
          />
        </HomeCard>
      </Layout>
    </>
  );
};

export default ProfileDeliveryMan;
