import Layout from "@/components/layouts/Layout";
import MainCard from "@/components/common/MainCard";
import SmallCard from "@/components/common/SmallCard";
import { AddPackagesButton } from "@/components/common";
import Link from "next/link";

const Packages = () => {
  return (
    <Layout title="Packages">
      <div className="flex flex-col">
        <MainCard
          text="Paquetes"
          textColor="text-primary"
          backHref="/start-delivery"
        >
          <div className="flex flex-col pt-4 px-4">
            <div className="text-colorText text-xs ">
              <h3 className="font-bold ">523 paquetes</h3>
              <p>con el criterio de filtrado seleccionado</p>
            </div>
            <div className="h-96 overflow-y-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="mt-4">
                  <SmallCard
                    packageID={`#${index}B438`}
                    status=""
                    address="AV. Carabobo y Rivadavia, CABA"
                    className=""
                  />
                </div>
              ))}
            </div>

            <div className=" flex justify-end mt-1">
              <Link href="/admin/add-package">
                <AddPackagesButton></AddPackagesButton>
              </Link>
            </div>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};
export default Packages;
