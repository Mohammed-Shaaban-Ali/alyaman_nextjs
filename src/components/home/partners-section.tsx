"use client";
import React from "react";
import HomeMarquee from "../home-marquee";
import { useHomeData } from "@/contexts/global/home-data";
import { Marquee } from "../ui/magicui/marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AppContainer from "../AppContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PartnersSection = () => {
  const { homeData } = useHomeData();
  const t = useTranslations();
  useGSAP(() => {
    gsap.fromTo(
      ".partners-section-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <div className=" partners-section mt-16 mb-12">
      <AppContainer className="flex mb-4 justify-center gap-2 items-center">
        <div className="flex flex-col  items-end gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
        <h1 className="font-semibold partners-section-title text-center text-4xl max-w-md items-center">
          {t("Our Partners")}
        </h1>
        <div className="flex flex-col  items-start gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
      </AppContainer>
      <div className="relative flex max-w-4xl m-auto w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover reverse className="[--duration:10s] ">
          {homeData?.partners.map((item) => (
            <Image
              key={item.id}
              src={item.path}
              alt="partner"
              width={100}
              height={100}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

export default PartnersSection;
