"use client";
import React from "react";
import TLTrash from "../icons/tl-trash-icon";
import ItemQuantity from "./item-quantity";
import Image from "next/image";
import { dress } from "@/assets";
import { useTranslations } from "next-intl";

const CartItem = () => {
  const t = useTranslations();
  return (
    <div className="row px-8 py-4 gap-y-3  lg:grid flex flex-col grid-cols-6">
      <div className="header lg:col-span-3 col-span-4 flex gap-3 flex-row items-center">
        <div className="border border-[#0000000D] p-2 rounded-2xl">
          <div className="relative size-16 ">
            <Image
              src={dress}
              alt=""
              className="absolute inset-0 object-contain"
            />
          </div>
        </div>
        <h2 className="line-clamp-2 max-w-[18rem]">
          J.VER Women&apos;s Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free
          dress
        </h2>
      </div>
      <div className="lg:grid flex items-center grid-cols-3 col-span-3  w-full flex-row">
        <div className="header col-span-1">
          <ItemQuantity />
        </div>
        <div className="header sm:ms-0 ms-3 w-full flex items-center flex-row justify-between col-span-1">
          <p>200 {t("AED")}</p>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex cursor-pointer bg-[#D902021A] items-center size-10 p-2 rounded-lg justify-center">
            <TLTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
