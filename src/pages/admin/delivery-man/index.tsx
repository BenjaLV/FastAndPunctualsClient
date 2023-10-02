import React from "react";
import Layout from "@/components/layouts/Layout";
import MainCard from "@/components/common/MainCard";
import CardDeliveryMan from "@/components/common/CardDeliveryMan";

const DeliveryMan = () => {
  return (
    <Layout title="Delivery-man">
      <div className="flex flex-col">
        <MainCard
          text="Repartidores"
          textColor="text-primary"
          backHref="/admin/manage-orders"
          className="w-300"
        >
          <div className="mt-9">
            <CardDeliveryMan></CardDeliveryMan>
            <CardDeliveryMan></CardDeliveryMan>
            <CardDeliveryMan></CardDeliveryMan>
            <CardDeliveryMan></CardDeliveryMan>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};

export default DeliveryMan;
