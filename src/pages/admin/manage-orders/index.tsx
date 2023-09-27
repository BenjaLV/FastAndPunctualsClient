import React, { useEffect, useState } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import MainCard from "@/components/common/MainCard";
import Layout from "@/components/layouts/Layout";
import DateSlider from "@/components/ui/DateSlider";
import { CircularProgress, CustomCircularProgress } from "@/components/common";
import Button from "@/components/ui/Button";

interface Props {
  user: string;
  packages: string;
  deliveryman: string;
  image?: string;
}

const ManageOrders = ({ user, image, packages, deliveryman }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [packagesProgress, setPackagesProgress] = useState(0);
  const [deliverymanProgress, setDeliverymanProgress] = useState(0);

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date);
  };

  const updatePackagesProgress = () => {
    const totalPackages = 20;
    const deliveredPackages = 16;
    const progress = (deliveredPackages / totalPackages) * 100;
    setPackagesProgress(progress);
  };

  const updateDeliverymanProgress = () => {
    const totalDeliverymen = 10;
    const activeDeliverymen = 4;

    const progress = (activeDeliverymen / totalDeliverymen) * 100;
    setDeliverymanProgress(progress);
  };

  useEffect(() => {
    const packagesInterval = setInterval(updatePackagesProgress, 50);
    const deliverymanInterval = setInterval(updateDeliverymanProgress, 50);

    return () => {
      clearInterval(packagesInterval);
      clearInterval(deliverymanInterval);
    };
  }, []);

  return (
    <Layout title="manage-orders">
      <MainCard
        text="Gestionar pedidos"
        backHref="/admin/manage-orders"
        className="w-300"
        height="h-495"
      >
        <div className="flex items-center">
          <Avatar
            src={image}
            name={user}
            className="bg-alternative w-14 h-14 top-4 left-4"
          />
          <div className="ml-8">
            <h1 className="font-bold text-textColor">Hola Admin{user}!</h1>
            <h3 className="text-xs text-textColor">
              Estos son los pedidos del día
            </h3>
          </div>
        </div>
        <div className="mt-8">
          <DateSlider onDateSelect={handleDateSelection} />
        </div>
        <div className="border border-textColor/50 w-[270px] h-[323px] rounded-xl mx-auto mt-5">
          <div className="flex justify-between">
            <h1 className="font-bold mx-3">Detalles</h1>
            <p className="mx-3 text-textColor text-sm">
              {selectedDate?.toLocaleDateString()}
            </p>
          </div>
          <div className="border-dotted border-b border-gray-400 w-[250px] mx-2 mt-1"></div>

          <div className="mt-12 flex justify-between">
            <div className="relative mx-3 top-[-20px]">
              <CustomCircularProgress progreso={deliverymanProgress} />
            </div>
            <div className="mr-16 my-[-10px]">
              <h1 className="font-bold text-medium">Repartidores</h1>
              <p className="text-xs">{deliveryman} 4/10 active</p>
            </div>
          </div>
          <div className="flex justify-between items-center ml-2 mt-1">
            <div>
              <AvatarGroup size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </AvatarGroup>
            </div>
            <div className="mr-2">
              <Button text="Ver" className="w-[53px] h-[29px] bg-secondary" />
            </div>
          </div>
          <div className="border-dotted border-b border-gray-400 w-[250px] mx-2 mt-2"></div>
          <div className="mt-6 flex justify-between">
            <div className="relative mx-3 top-1">
              <CustomCircularProgress progreso={packagesProgress} />
            </div>
            <div className="mr-16">
              <h1 className="font-bold text-medium">Paquetes</h1>
              <p className="text-xs">{packages} 16/20 entregados</p>
            </div>
          </div>
          <div className="flex justify-end mr-2 mt-[-6px]">
            <Button text="Ver" className="w-[53px] h-[29px] bg-secondary" />
          </div>
        </div>
      </MainCard>
    </Layout>
  );
};

export default ManageOrders;
