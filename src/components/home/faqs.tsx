"use client";
import { useTranslations } from "next-intl";
import AppContainer from "../AppContainer";
import TLLogoIcon from "../icons/tl-logo-icon";
import FaqsAccordion from "./faqs-accordion";

const Faqs = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col my-24  gap-5">
      <AppContainer>
        <div className="flex flex-col items-center justify-center mb-10 ">
          <div className="relative">
            <h2 className="md:text-xl text-3xl font-semibold ">{t("FAQs")}</h2>
            <div className="w-10 m-auto h-1 rounded-full bg-[#404040]"></div>
            <div className="absolute left-[50%] translate-x-[-50%] bottom-0">
              <TLLogoIcon />
            </div>
          </div>
          <p className="lg:max-w-[30%] md:max-w-[70%] max-w-[90%] mt-2 text-center">
            {t("FAQs Desc")}
          </p>
        </div>
      </AppContainer>
      <AppContainer className="mb-24">
        <FaqsAccordion />
      </AppContainer>
    </div>
  );
};

export default Faqs;
