import React from "react";
import Layout from "@/components/layouts/Layout";
import FormAddPackages from "@/components/ui/FormAddPackages";
import Card from "@/components/common/MainCard";

const AddPackageAdmin = () => {
  return (
    <>
      <Layout title="Add-Package">
        <Card text="Agregar paquetes" backHref="/admin/packages" height="h-495">
          <FormAddPackages />
        </Card>
      </Layout>
    </>
  );
};

export default AddPackageAdmin;
