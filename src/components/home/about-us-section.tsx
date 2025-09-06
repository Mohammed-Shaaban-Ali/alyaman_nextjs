"use client";
import {
  aboutUs01,
  aboutUs02,
  aboutUsBG,
  aboutUsImg,
  aboutUsMini,
  logo,
} from "@/assets";
import Image from "next/image";
import TLStarBadge from "../icons/tl-star-badge";
import TLArrowRight from "../right-arrow";
import { Button } from "../ui/button";
import FeaturedTopicsByCategories from "./featured-topics-by-cateogires/featured-topics-by-categories";
import { useLocale, useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AppContainer from "../AppContainer";
import { useHomeData } from "@/contexts/global/home-data";

const AboutUsSection = () => {
  const t = useTranslations();
  const { homeData } = useHomeData();
  const locale = useLocale();
  // useGSAP(() => {
  //   gsap.to(".big-img", {
  //     opacity: 1,
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: ".about-us-section",
  //       start: "top 95%",
  //     },
  //     duration: 0.8,
  //     stagger: 0.2,
  //     ease: "back.inOut",
  //   });
  //   gsap.to(".abt-us-to-stretch", {
  //     opacity: 1,
  //     width: "32px",
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: ".big-img",
  //       start: "top 60%",
  //     },
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "back.inOut",
  //   });
  //   gsap.fromTo(
  //     ".abt-us-box-to-up",
  //     {
  //       opacity: 0,
  //       y: 30,
  //     },
  //     {
  //       scrollTrigger: {
  //         trigger: ".about-us-section",
  //         start: "top 60%",
  //       },
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "back.inOut",
  //       opacity: 1,
  //       y: 0,
  //     }
  //   );
  //   gsap.fromTo(
  //     ".abt-us-data",
  //     {
  //       opacity: 0,
  //       x: 30,
  //     },
  //     {
  //       scrollTrigger: {
  //         trigger: ".about-us-section",
  //         start: "top 60%",
  //       },
  //       duration: 1,
  //       stagger: 0.8,
  //       ease: "elastic.inOut",
  //       opacity: 1,
  //       x: 0,
  //     }
  //   );
  // });
  return (
    <section id="about-us">
      <div className="relative about-us-section mb-14 pb-6 overflow-hidden w-full h-full mt-12">
        <div className="absolute -end-14 bottom-10">
          <div className="flex flex-col -rotate-[15deg] gap-3">
            <div className="flex flex-row gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="size-8 bg-[#E7E7E9] rounded-lg" key={i}></div>
              ))}
            </div>
            <div className="flex flex-row gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="size-8 bg-[#E7E7E9] rounded-lg" key={i}></div>
              ))}
            </div>
            <div className="flex flex-row gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="size-8 bg-[#E7E7E9] rounded-lg" key={i}></div>
              ))}
            </div>
          </div>
        </div>
        <AppContainer className="flex  lg:flex-row  flex-col gap-x-8 pt-4 items-start relative">
          <div className="relative flex lg:gap-8 gap-4 lg:m-0 m-auto lg:w-auto  justify-center ">
            <div className="relative flex size-full justify-center items-center gap-3 flex-col">
              <div className="absolute lg:size-55 size-32 lg:-top-2 -top-2 z-[10] rounded-full border border-[#E7E7E9]"></div>
              <Image
                src={logo}
                alt="logo"
                className=" lg:size-30 size-15 object-contain"
              />
              {/* lg:w-[650px] lg:h-[450px] sm:w-[400px] sm:h-[200px] w-[300px] h-[200px] */}
              <div className="relative rounded-2xl lg:size-80 md:size-80 sm:size-60 size-30 min-[400px]:size-50 ">
                <Image
                  src={homeData.about_section.aboutus_image_1}
                  alt="aboutus"
                  fill
                  className="  object-cover z-[11] rounded-2xl"
                />
              </div>
            </div>
            <div className="relative w-full mt-9  flex flex-col justify-center items-center">
              {/* lg:w-[650px] lg:h-[450px] sm:w-[400px] sm:h-[200px] w-[300px] h-[200px] */}
              <div className="lg:size-60 md:size-50 sm:size-50 min-h-[400px]:size-40 size-30 relative overflow-hidden rounded-2xl">
                <Image
                  src={homeData.about_section.aboutus_image_2}
                  alt="aboutus"
                  fill
                  className="z-[11] size-full "
                />
              </div>
              <div className="absolute lg:size-47 md:size-30 sm:size-30 size-25 lg:bottom-0 md:bottom-4 min-[400px]:bottom-0 bottom-[-28] z-[10] rounded-full border border-[#E7E7E9]"></div>
              <div className="flex flex-col lg:gap-y-4 gap-2 items-center absolute lg:bottom-8 md:bottom-10 sm:-bottom-3 min-[400px]:bottom-4 bottom-[-14] justify-center">
                <div className="flex items-center lg:gap-4 gap-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      className="size-1 bg-[#8B9BA8] rounded-full"
                      key={i}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center lg:gap-4 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      className="size-1 bg-[#8B9BA8] rounded-full"
                      key={i}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center lg:gap-4 gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      className="size-1 bg-[#8B9BA8] rounded-full"
                      key={i}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 items-center sm:flex-row flex-col">
            <div className=" flex abt-us-data flex-col mt-4 lg:mt-0 px-3 ">
              <div className="flex flex-row items-center gap-x-3">
                <span className="text-main">{t("About Us")}</span>
              </div>
              <h2 className="lg:text-4xl leading-12 text-3xl  max-w-md">
                {homeData.about_section?.aboutus_title}
              </h2>
              <p className="max-w-md">
                {homeData.about_section?.aboutus_description}
              </p>
            </div>
          </div>
        </AppContainer>
      </div>
    </section>
  );
};

export default AboutUsSection;
