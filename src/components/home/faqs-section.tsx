"use client";
import { useTranslations } from "next-intl";
import AppContainer from "../AppContainer";

import ExpansionPanel08 from "../ui/expansion-panel-08";
import { useHomeData } from "@/contexts/global/home-data";
export default function FaqsSection() {
  const t = useTranslations();
  const { homeData } = useHomeData();
  return (
    <AppContainer>
      <div className="flex mx-auto flex-col max-w-4xl w-full my-12">
        <div className="flex mb-8 justify-start flex-col items-start">
          <AppContainer className="flex user-reviews-section justify-center gap-2 items-center">
            <div className="flex flex-col  items-end gap-1">
              <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
              <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
            </div>
            <h2 className="font-semibold user-reviews-big-title text-center text-4xl max-w-md items-center">
              {t("Frequently Asked Question")}
            </h2>
            <div className="flex flex-col  items-start gap-1">
              <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
              <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
            </div>
          </AppContainer>
        </div>
        <ExpansionPanel08 questions={homeData.faqs} />
      </div>
    </AppContainer>
  );
}
