import { doctor01 } from "@/assets";
import Image from "next/image";
import TLArrowCircleTopRight from "../icons/tl-arrow-circle-top-right";

const HeroPopularExpertise = () => {
  return (
    <div className="bg-[#0202021A] order-1 gap-y-4 z-30 relative flex-col flex rounded-2xl py-4 px-3 items-center justify-center">
      <h3 className="text-white text-xl font-semibold">
        Our Popular Expertise List
      </h3>
      <hr className="w-full h-[0.5px] border-[#FFFFFF33] " />
      <div className="flex w-full lg:justify-start justify-between gap-y-4 flex-col">
        <div className="flex w-full flex-row group cursor-pointer gap-2 items-center">
          <div className="relative size-10">
            <Image src={doctor01} alt="Doctor" className="absolute" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-white text-base">Dr. Omar ElSharkawy</h6>
            <p className="text-[#FFFFFF99] font-normal text-sm">
              Orthopedic Surgery
            </p>
          </div>
          <TLArrowCircleTopRight className="size-8 lg:ml-0 ml-auto group-hover:scale-110 transition-all duration-300 ms-4" />
        </div>
        <div className="flex w-full flex-row group cursor-pointer gap-2 items-center">
          <div className="relative size-10">
            <Image src={doctor01} alt="Doctor" className="absolute" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-white text-base">Dr. Omar ElSharkawy</h6>
            <p className="text-[#FFFFFF99] font-normal text-sm">
              Orthopedic Surgery
            </p>
          </div>
          <TLArrowCircleTopRight className="size-8 lg:ml-0 ml-auto group-hover:scale-110 transition-all duration-300 ms-4" />
        </div>
        <div className="flex w-full flex-row group cursor-pointer gap-2 items-center">
          <div className="relative size-10">
            <Image src={doctor01} alt="Doctor" className="absolute" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-white text-base">Dr. Omar ElSharkawy</h6>
            <p className="text-[#FFFFFF99] font-normal text-sm">
              Orthopedic Surgery
            </p>
          </div>
          <TLArrowCircleTopRight className="size-8 lg:ml-0 ml-auto group-hover:scale-110 transition-all duration-300 ms-4" />
        </div>
        <div className="flex w-full flex-row group cursor-pointer gap-2 items-center">
          <div className="relative size-10">
            <Image src={doctor01} alt="Doctor" className="absolute" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-white text-base">Dr. Omar ElSharkawy</h6>
            <p className="text-[#FFFFFF99] font-normal text-sm">
              Orthopedic Surgery
            </p>
          </div>
          <TLArrowCircleTopRight className="size-8 lg:ml-0 ml-auto group-hover:scale-110 transition-all duration-300 ms-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroPopularExpertise;
