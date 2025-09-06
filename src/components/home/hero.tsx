"use client";

import { heroBg, heroBg2, heroPerson1, heroPerson2 } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import TLPlayCircle from "../icons/tl-play-circle";
import { Button } from "../ui/button";
import Triangle from "../icons/triangle";
import { useHomeData } from "@/contexts/global/home-data";
import HeroVideoDialog from "../dialogs/hero-video-dialog";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const { homeData } = useHomeData();
  useGSAP(() => {
    gsap.fromTo(
      ".circle-icons",
      { scale: 0 },
      { scale: 1, delay: 0.5, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );
    gsap.fromTo(
      ".data-count",
      {
        opacity: 0,
        scale: 0.8,
      },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );

    gsap.fromTo(
      ".shape1",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
      {
        delay: 0.5,
        duration: 1,
        stagger: 0.8,
        ease: "back.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 130%, 0% 0%)",
      }
    );
    gsap.fromTo(
      ".shape2",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
      {
        delay: 0.8,
        duration: 1,
        stagger: 0.8,
        ease: "circ.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 130%, 0% 0%)",
      }
    );

    gsap.fromTo(
      ".dot",
      { backgroundColor: "#8596A3", scale: 1 },
      {
        backgroundColor: "#8596A3",
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.fromTo(
      ".contact-line",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );
    gsap.fromTo(
      ".big-header",
      { opacity: 0, filter: "blur(5px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.inOut",
      }
    );
    gsap.fromTo(
      ".paragraph-desc",
      { opacity: 0, filter: "blur(2px)", y: -20 },
      {
        delay: 0.3,
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0,
        ease: "power2.inOut",
      }
    );
    gsap.to(".to-stretch", {
      opacity: 1,
      width: "128px",
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
    });
    gsap.to(".top-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
    });
    gsap.to(".hero-btns", {
      opacity: 1,
      duration: 0.6,
      stagger: 0.6,
      ease: "back.inOut",
    });

    gsap.fromTo(
      ".hero-person-2",
      { y: -20, x: -20, filter: "drop-shadow(0px 0px 0px #E1AC0F)" },
      {
        y: 0,
        x: 0,
        filter: "drop-shadow(8px 8px 0px #E1AC0F)",
        delay: 0.8,
        duration: 1,
        ease: "back.inOut",
      }
    );
    gsap.fromTo(
      ".hero-chat-text",
      { y: -50, opacity: 0 },
      { y: 0, delay: 1, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    return () => {
      gsap.killTweensOf(".data-count");
    };
  });
  const t = useTranslations();
  return (
    <div className="">
      <div className="relative min-h-[30rem] md:px-12 px-4 h-full  overflow-hidden">
        <div className="absolute size-full inset-0 z-20 "></div>
        {/* 3 BOXES */}

        {/* 3 BOXES */}
        <Image
          src={heroBg}
          alt="hero"
          className="absolute start-0 top-0 z-10 w-full h-full object-cover "
          priority
        />
        <Image
          src={heroBg2}
          alt="hero2"
          className="absolute object-bottom start-0 top-0 z-[11] w-full h-full object-cover "
          priority
        />

        <AppContainer className="flex mt-0 mb-8 gap-16 z-20 relative w-full lg:flex-row flex-col lg:items-start items-center">
          <div className="flex lg:flex-row flex-col-reverse gap-10">
            <div className="flex lg:mt-0 mt-4 justify-between  lg:pt-28 lg:items-start items-center  h-full gap-y-2 z-30 relative  flex-col">
              <h1 className="text-[#020202] lg:leading-16 big-header opacity-0 lg:text-5xl text-3xl font-medium  lg:max-w-lg  max-w-lg text-center ">
                {homeData.hero_section.hero_section_title}{" "}
                <span className="text-main">
                  {homeData.hero_section.hero_section_title_2}
                </span>
              </h1>
              <p className="max-w-[500px] paragraph-desc opacity-0 text-[#020202] text-xl text-center ">
                {homeData.hero_section.hero_section_description}
              </p>
              <div className="flex hero-btns w-full opacity-0 flex-row justify-center lg:justify-start  gap-8 lg:mt-6 mt-6 relative z-20">
                <Button className="bg-main-dark px-8 sm:text-lg text-base w-fit cursor-pointer rounded-xl h-12 overflow-hidden z-10 relative transition-all duration-300 hover:scale-105">
                  {t("Contact Us")}
                </Button>
                <HeroVideoDialog />
              </div>
            </div>
          </div>
          <div className="flex opacity-0 relative sm:pt-20 lg:pt-16 lg:pb-0 pb-12 gap-x-8 lg:flex-col flex-row lg:mt-0  z-20 data-count text-[#020202] gap-y-8">
            <div className="group absolute">
              <Triangle className="text-[#F7BD11] lg:size-19 sm:size-14 size-10 group-hover:rotate-[270deg] transition-all duration-500 sm:-top-6 -top-0 z-[12] sm:-start-20 -start-10 absolute" />
              <Triangle className="text-[#FDEBB5] lg:size-19 sm:size-14 size-10 group-hover:-rotate-[270deg] transition-all duration-500 sm:-top-6 -top-0 rotate-45 sm:-start-20 -start-10 absolute" />
            </div>
            <div className=" z-[9] relative gap-x-12 flex ltr:lg:me-24  rtl:lg:ms-24 ">
              <div className="absolute border-main"></div>

              <div className="relative w-[120px] h-[180px] min-[400px]:h-[250px] min-[400px]:w-[200px] sm:h-[300px] sm:w-[250px] md:size-[370px] lg:w-[370px] lg:h-[420px]">
                <Image
                  src={homeData.hero_section.hero_section_image_1}
                  alt="hero"
                  fill
                  className="start-0  h-full rounded-full top-0 z-[13] object-cover"
                  priority
                />
                <div className="absolute hero-chat-text bg-[#684F07] rounded-full lg:w-32 lg:h-12 sm:w-20 sm:h-8 w-16 h-6  sm:top-18 min-[400]:top-10 top-5 z-[13] lg:-end-16 -end-12">
                  <div className="flex absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 flex-col justify-start items-start gap-2">
                    <div className="lg:w-24 sm:w-14 w-12 bg-white sm:h-1 h-0.5 rounded-full"></div>
                    <div className="lg:w-18 sm:w-8 w-6 bg-white sm:h-1 h-0.5 rounded-full"></div>
                  </div>
                </div>
                <div className="lg:size-40 sm:size-30 min-[400px]:size-22 size-20 border-[18px] absolute -bottom-8 -start-8 z-[12] border-main-dark bg-transparent rounded-full min-[400px]:border-[20px] sm:border-[28px] lg:border-[35px]"></div>
              </div>
              <div className="relative w-full h-full mt-4 sm:mt-8 lg:mt-12 flex justify-center">
                {/* Dots pattern */}
                <div className="absolute z-10 end-2 sm:end-6 lg:end-10 -top-4 sm:-top-6 lg:-top-14 flex flex-col">
                  <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex flex-row gap-x-1 sm:gap-x-2 lg:gap-x-3 justify-end items-end"
                      >
                        {Array.from({ length: 8 }).map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#8596A3] dot"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero image container */}
                <div className="relative w-[80px] h-[180px] min-[400px]:h-[200px] min-[400px]:w-[100px]  sm:h-[300px] sm:w-[180px] md:w-[200px] md:h-[350px] lg:h-[456px] lg:w-[226px]">
                  <Image
                    src={homeData.hero_section.hero_section_image_2}
                    fill
                    alt="hero2"
                    className="hero-person-2 rounded-full size-full object-cover z-20 "
                    priority
                  />

                  {/* Yellow shadow that matches image dimensions */}
                  {/* <div className="absolute inset-0 bg-main z-10 translate-x-2 translate-y-2 sm:translate-x-1 sm:translate-y-4 lg:translate-x-2 lg:translate-y-2"></div> */}
                </div>

                {/* Rotating square */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rotate-45 hover:rotate-[315deg] transition-all duration-500 bg-main-dark rounded-sm sm:rounded-md lg:rounded-2xl -end-12 sm:-end-24 lg:-end-32 top-6 sm:top-8 lg:top-12 absolute"></div>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  );
};

export default Hero;
