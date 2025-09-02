import { dress } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductOrder = () => {
  const t = useTranslations();
  return (
    <div className="flex border px-4 py-4 rounded-2xl gap-2 md:gap-4">
      <Link
        href={`/product/1`}
        className="border  w-[72px] rounded-2xl relative h-[72px] md:w-[95px] md:h-[95px] img-fit overflow-hidden"
      >
        <Image
          src={dress}
          fill
          alt="product-image"
          className="object-contain p-2"
          loading="lazy"
        />
      </Link>
      <div className="">
        <Link href={`/product/${1}`}>
          <h3 className="font-semibold max-w-[17rem] line-clamp-2 text-xs md:text-base">
            J.VER Women&apos;s Dress Shirts Solid Long Sleeve Stretch
            Wrinkle-Free
          </h3>
        </Link>

        <div className="flex sm:gap-4 md:gap-5 lg:gap-11 w-full flex-wrap mt-2">
          <div className="flex flex-row gap-x-8 w-full">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-xs text-[#545454]">
                {t("Type")}
              </span>
              <span className="font-medium text-sm">Cotton</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-xs text-[#545454]">
                {t("Color")}
              </span>
              <span className="font-medium text-sm">Black</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
