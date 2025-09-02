import Image from "next/image";
import React from "react";
import TLLogoIcon from "../icons/tl-logo-icon";
import BorderedText from "./bordered-text";
import { heroBg } from "@/assets";
import { useTranslations } from "next-intl";

const PageHeader = ({ text }: { text: string }) => {
  const t = useTranslations();
  return (
    <div className="relative flex justify-center items-center overflow-hidden h-56 bg-[#F5F5F5]">
      <Image
        src={heroBg}
        alt="hero"
        className="absolute start-0 top-0 z-10 w-full h-full object-cover"
        priority
      />
      <div className="absolute -bottom-6 start-[15%]">
        <TLLogoIcon />
      </div>
      <div className="absolute -end-10 rotate-270 bottom-2/4">
        <TLLogoIcon />
      </div>
      <div className="absolute start-[50%] -top-8 -rotate-45">
        <TLLogoIcon />
      </div>
      <div className="absolute text-center z-20 left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]">
        <BorderedText strokeWidth={0.1} text={text} />
      </div>
      <div className="flex text-center justify-center items-center">
        <h2 className="text-4xl font-semibold">{t(text)}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
