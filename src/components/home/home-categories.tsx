import React from "react";
import CategoriesSwiper from "./categories-swiper";
import AppContainer from "../AppContainer";
import TLLogoIcon from "../icons/tl-logo-icon";
import { useTranslations } from "next-intl";

const HomeCategories = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col my-24 gap-5">
      <AppContainer>
        <div className="flex flex-row justify-between items-center">
          <div className="relative">
            <h2 className="md:text-xl text-lg font-semibold">
              {t("Our Categories")}
            </h2>
            <div className="w-10 h-1 rounded-full bg-[#404040]"></div>

            <div className="absolute bottom-0">
              <TLLogoIcon />
            </div>
          </div>
        </div>
        <CategoriesSwiper />
      </AppContainer>
    </div>
  );
};

export default HomeCategories;
