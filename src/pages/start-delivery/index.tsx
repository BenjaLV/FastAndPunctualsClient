import HomeCard from "@/components/common/HomeCard";
import SmallCard from "@/components/common/SmallCard";
import Layout from "@/components/layouts/Layout";
import Button from "@/components/ui/Button";
import Link from "next/link";

const StartDelivery = () => {
    return (
        <Layout title="start-delivery">
            <div className="mt-9">
                <div className="mb-5 mt-1 ">
                    <HomeCard paquetes={28} text="Repartos pendientes" className="w-[300px] h-[244px]">
                        <SmallCard  packageID={'#0B438'} status="En curso" address="AV. Carabobo y Rivadavia, CABA" className="bg-inprogress" />
                        <SmallCard  packageID={'#0B438'} status="En curso" address="AV. Carabobo y Rivadavia, CABA" className="bg-inprogress" />
                    </HomeCard>
                </div>
                <div>
                    <HomeCard
                        paquetes={28}
                        text="Historial de repartos"
                        className="w-[300px] h-[244px]"
                    >
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>
                        <SmallCard packageID={'#0B438'} status="Entregado" address="AV. Carabobo y Rivadavia, CABA" className="bg-deliverydp"/>

                    </HomeCard>
                </div>
                <div
                    className="flex justify-center botton-4"
                    style={{ marginTop: "1.2rem" }}
                >
                    <Link href="/get-package">
                        <Button
                            text="Obtener paquetes"
                            className="bg-secondary text-primary hover:bg-alternative text-sm"
                        />
                    </Link>
                </div>
            </div>

        </Layout>
    );
};

export default StartDelivery;
