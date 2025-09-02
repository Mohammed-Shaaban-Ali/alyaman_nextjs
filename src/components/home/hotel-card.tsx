import { room01, teeth } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TLArrowRight from "../right-arrow";
import TLStarFill from "../icons/tl-star-fill";

const HotelCard = () => {
  return (
    <div className="flex   flex-col ">
      <div className="relative w-full h-[200px] overflow-hidden rounded-3xl">
        <Image src={room01} alt="room" className="absolute object-cover" />
      </div>
      <h3 className="text-xl font-semibold ">
        Oasis Sands Resort Hotel 4 Camp
      </h3>
      <p>Plam Jumeirah, Dubai</p>
      <div className="flex mt-2 flex-row items-center">
        <div className="flex flex-row items-center">
          <TLStarFill className="text-main" />
          <TLStarFill className="text-main" />
          <TLStarFill className="text-main" />
          <TLStarFill className="text-main" />
          <TLStarFill className="text-main" />
        </div>
        <span className="ms-2 text-sm">(218 Visitors)</span>
      </div>
    </div>
  );
};

export default HotelCard;
