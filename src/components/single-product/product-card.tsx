import Image from "next/image";
import Link from "next/link";
import React from "react";
import TLAddToCart from "../icons/tl-add-to-cart-icon";
import TLHeartIcon from "../icons/tl-heart-icon";
import { dress } from "@/assets";
import TLStarFill from "../icons/tl-star-fill";
import { useTranslations } from "next-intl";

const ProductCard = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col m-auto ">
      <Link
        href={"/"}
        className="card border flex h-64 w-auto relative justify-center items-center p-3 rounded-2xl"
      >
        <div className="discount p-2 border rounded-lg absolute top-3 text-xs text-[#05613A] start-3">
          25% {t("OFF")}
        </div>
        <div className="flex text-[#05613A] ltr:flex-row rtl:flex-row-reverse absolute top-3 gap-1 end-3">
          <div className="border p-1 rounded-lg">
            <TLAddToCart />
          </div>
          <div className="border p-1 rounded-lg">
            <TLHeartIcon />
          </div>
        </div>
        <div className="relative size-28">
          <Image
            src={dress}
            alt="dress"
            className="absolute inset-0 object-cover"
          />
        </div>
      </Link>
      <div className="flex text-sm mt-2 flex-row justify-between">
        <span className="text-[#545454]">Dresses</span>
        <div className="flex flex-row items-center gap-1">
          <TLStarFill />
          <span className="font-bold">4.5</span>
          <span className="text-xs">(2910)</span>
        </div>
      </div>
      <h1 className="font-medium">
        J.VER Women Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With
        Yellow
      </h1>
      <div className="flex flex-row items-center mt-4 justify-between">
        <div className="text-lg font-medium">AED 190</div>
        <div className="flex items-center flex-row gap-1">
          <div className="rounded-full size-4 bg-[#404040]"></div>
          <div className="rounded-full size-4 bg-[#333333]"></div>
          <div className="rounded-full size-4 bg-[#E8E8E8]"></div>
          <span>+2</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
