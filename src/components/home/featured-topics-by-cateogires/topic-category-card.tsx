import { computerScience } from "@/assets";
import TLArrowRight from "@/components/right-arrow";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const TopicCategoryCard = () => {
  const t = useTranslations();
  return (
    <div className="flex justify-end category-card items-end lg:col-start-4">
      <div className="bg-white text-center shadow-[0_0_164px_-12px_#00000040] z-10 px-6 lg:min-w-[210px] sm:min-w-[190px] min-w-[160px] flex flex-col justify-center items-center py-6 rounded-3xl">
        <div className="relative lg:size-28 size-20">
          <Image
            src={computerScience}
            alt="computerScience"
            className="size-full object-cover rounded-3xl"
          />
        </div>
        <h3 className="font-semibold lg:text-base text-sm mt-2">
          Computer Science
        </h3>
        <span className="lg:text-base text-xs">27 {t("Courses")}</span>
        <div className="size-12 ltr:rotate-0 rtl:rotate-180 mt-4 bg-[#EBF3E6] text-[#328800] rounded-full flex justify-center items-center ">
          <TLArrowRight className="size-7" />
        </div>
      </div>
    </div>
  );
};

export default TopicCategoryCard;
