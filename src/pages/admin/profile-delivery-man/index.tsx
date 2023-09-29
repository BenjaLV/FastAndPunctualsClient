import React from "react";
import Layout from "@/components/layouts/Layout";
import Card from "@/components/common/MainCard";

const ProfileDeliveryMan = () => {
  return (
    <>
      <Layout title="Add-Package">
        <Card text="Perfil de repartidor" backHref="/admin/delivery-man" height="h-20">
          <h3></h3>
        </Card>
      </Layout>
    </>
  );
};

export default ProfileDeliveryMan;
