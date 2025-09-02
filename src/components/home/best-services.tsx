"use client";
import { onlineLibrary } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import { useHomeData } from "@/contexts/global/home-data";
import React from "react";

const BestServices = () => {
  const t = useTranslations();
  const { homeData } = useHomeData();
  const data = homeData.services;
  useGSAP(() => {
    gsap.fromTo(
      ".mentors-upper-title",
      { opacity: 0, filter: "blur(10px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".mentors-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <AppContainer>
      <div className="flex mentors-section justify-center flex-col items-center">
        <div className="flex mentors-upper-title relative justify-center gap-x-2 items-center">
          <div className="flex flex-col items-end  gap-1">
            <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
            <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
          </div>
          <h3 className="text-main-orange text-lg text-center font-medium">
            {t("What we do")}
          </h3>
          <div className="flex flex-col items-start gap-1">
            <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
            <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
          </div>
        </div>
        <h1 className="font-semibold mentors-big-title mt-4 text-center text-4xl max-w-md items-center">
          {t("Our Best Services For You")}
        </h1>
        <p className="max-w-sm text-lg text-center mt-8">
          {t("our-best-services-desc")}
        </p>
      </div>
      <div className="grid relative lg:grid-cols-5 gap-y-4 gap-x-2 mt-8 justify-center items-center">
        {/* First Item */}
        {data.map((service, i) => (
          <React.Fragment key={i}>
            <div className="flex h-full relative flex-col justify-center items-center w-full">
              <div className="size-32  relative rounded-full bg-main-dark">
                <Image
                  src={service.image}
                  fill
                  alt="mentor"
                  className="absolute inset-0"
                />
              </div>
              {/* Text for small screens */}
              <div className="flex lg:hidden flex-col items-center justify-center mt-4">
                <h1 className="text-xl font-semibold">{service.title}</h1>
                <p className="text-lg text-center max-w-xs text-[#545454]">
                  {service.short_description}
                </p>
              </div>
            </div>

            {i < data.length - 1 && (
              <div className="w-full hidden lg:block">
                <svg width="100%" height="2" className="overflow-visible">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#e1ac0f"
                    strokeWidth="4"
                    strokeDasharray="10 13"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Text row for large screens only */}

      <div className="hidden lg:grid relative lg:grid-cols-5 gap-y-4 gap-x-2 mt-8 justify-center items-center">
        {data.map((service) => (
          <React.Fragment key={service.id}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-semibold">{service.title}</h1>
              <p className="text-lg text-center max-w-xs text-[#545454]">
                {service.short_description}
              </p>
            </div>
            <div className=""></div>
          </React.Fragment>
        ))}

        {/* <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">
            Educational Resource Library
          </h1>
          <p className="text-lg text-center max-w-xs text-[#545454]">
            Access an extensive library filled with e-books, articles, videos,
            and other resources to supplement your learning journey and expand
            your knowledge base.
          </p>
        </div>
        <div className=""></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">
            Educational Resource Library
          </h1>
          <p className="text-lg text-center max-w-xs text-[#545454]">
            Access an extensive library filled with e-books, articles, videos,
            and other resources to supplement your learning journey and expand
            your knowledge base.
          </p>
        </div> */}
      </div>
    </AppContainer>
  );
};

export default BestServices;
