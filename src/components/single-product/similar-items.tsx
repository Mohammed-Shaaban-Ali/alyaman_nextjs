import React from "react";
import TLLogoIcon from "../icons/tl-logo-icon";
import SimilarItemsSwiper from "./similar-items-swiper";
import { useTranslations } from "next-intl";

const SimilarItems = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center mb-30 mt-8 gap-5">
      <div className="flex  md:flex-row flex-col justify-between md:items-center items-start">
        <div className="relative">
          <h2 className="md:text-xl text-lg font-semibold">
            {t("Similar Items")}
          </h2>
          <div className="w-10 h-1 rounded-full bg-[#404040]"></div>

          <div className="absolute bottom-0">
            <TLLogoIcon />
          </div>
        </div>
      </div>
      <div className="">
        <SimilarItemsSwiper />
      </div>
    </div>
  );
};

export default SimilarItems;
