"use client";
import { faqsMaskedImg } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import TLFaceBookLine from "../facebook-line";
import TLInstagramLine from "../instagram-line";
import TLLinkedInLine from "../linkedin-line";
import { Button } from "../ui/button";
import ExpansionPanel08 from "../ui/expansion-panel-08";
import TLWhatsappLine from "../whatsapp-line";
export default function FaqsSection() {
  const t = useTranslations();
  return (
    <AppContainer>
      <div className="lg:grid gap-y-8 flex flex-col-reverse mb-20 lg:grid-cols-6 items-start justify-between gap-x-6 ">
        <div className="flex justify-center lg:justify-start m-auto lg:m-0 lg:flex-col sm:flex-row flex-col col-span-2 gap-4">
          {/* Image */}
          <div className="lg:size-full size-60 overflow-hidden rounded-2xl">
            <Image
              src={faqsMaskedImg}
              alt="faqs"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#F4F7F9] lg:p-5 p-10 rounded-2xl flex lg:flex-row flex-col lg:justify-between justify-center lg:text-start text-center gap-y-8 lg:gap-0  items-center">
            <div className="flex gap-2 flex-col ">
              <span className="text-lg font-semibold">{t("Get Help")}</span>
              <div className="flex lg:gap-2 gap-4 flex-row items-center">
                <TLInstagramLine />
                <TLFaceBookLine />
                <TLLinkedInLine />
                <TLWhatsappLine />
              </div>
            </div>
            <Button
              variant={"outline"}
              className="border-main text-main h-12 px-8 bg-transparent hover:bg-main/10 duration-300 cursor-pointer hover:text-main"
            >
              {t("Contact Us")}
            </Button>
          </div>
        </div>
        <div className="flex lg:col-span-4 flex-col max-w-4xl w-full">
          <div className="flex mb-8 justify-start flex-col items-start">
            <div className="flex justify-center gap-x-2 items-center">
              <div className="bg-main w-14 h-1 rounded-full"></div>
              <h3 className="text-main text-base font-medium">
                {t("Frequently Asked Question")}
              </h3>
            </div>
            <h1 className="font-semibold mt-4 text-start text-4xl max-w-xl items-center">
              {t("General Questions")}
            </h1>
          </div>
          <ExpansionPanel08 />
        </div>
      </div>
    </AppContainer>
  );
}
