import React from "react";
import Layout from "@/components/layouts/Layout";
import FormAddPackages from "@/components/ui/FormAddPackages";
import MainCard from "@/components/common/MainCard";

const AddPackageAdmin = () => {
  return (
    <>
      <Layout title="Add-Package">
        <MainCard text="Agregar paquetes" backHref="/admin/packages" height="h-495">
          <FormAddPackages />
        </MainCard>
      </Layout>
    </>
  );
};

export default AddPackageAdmin;
