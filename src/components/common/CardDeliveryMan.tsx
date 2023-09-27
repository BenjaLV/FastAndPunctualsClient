import { CustomCircularProgress } from "@/components/common";

function CardDeliveryMan() {
  return (
    <div className="px-4">
      <div className=" border-y bg-white py-5 px-1">
        <div className=" grid grid-cols-6 items-center">
          <div className="col-start-1 justify-center">
            <CustomCircularProgress progreso={30} />
          </div>
          <div className="col-start-2 col-span-4 ml-10">
            <div className="text-textColor font-bold text-sm">FARID</div>
            <div className="bg-deliverydp text-textColor text-center text-xs h-[15px] w-[81px] rounded-full font-bold ">
              En Curso
            </div>
          </div>
          <div className=" flex flex-row-reverse col-start-6">
            <img
              className="rounded-full w-[40px] h-[40px]"
              src="/foto_perfil.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardDeliveryMan;
