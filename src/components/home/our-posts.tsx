"use client";
import { laptopImgHowITworks } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Zain } from "next/font/google";
import OurPostsCarousel from "./our-posts-carousel";
import React, { useCallback, useState } from "react";
import { CarouselApi } from "../ui/carousel";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHomeData } from "@/contexts/global/home-data";
const zain = Zain({
  weight: ["200", "300", "400", "700", "800", "900"],
  subsets: ["latin"],
});

const OurPosts = () => {
  const t = useTranslations();

  useGSAP(() => {
    gsap.fromTo(
      ".how-it-work-upper-title",
      { opacity: 0, filter: "blur(10px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".how-it-work-section",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".how-it-work-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".how-it-work-section",
          start: "top 80%",
        },
      }
    );
    const steps = gsap.utils.toArray(".step");

    steps.forEach((step, i) => {
      gsap.fromTo(
        step as HTMLElement,
        {
          filter: "blur(5px)",
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          delay: 0.2 * i,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: step as HTMLElement,
            start: "top 70%",
          },
        }
      );
    });
    gsap.to(".how-work-to-stretch", {
      opacity: 1,
      width: "100%",
      scrollTrigger: {
        trigger: ".how-it-work-section",
        start: "top 80%",
      },
      y: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: "power3.inOut",
    });
  });
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <>
      <div className=" how-it-work-section ps-2.5 md:ps-3 ms-auto w-full max-w-[1400px]  py-12 relative">
        <div className="flex mb-4 justify-start gap-2 items-center">
          <h1 className="font-semibold how-it-work-big-title text-center text-4xl max-w-md items-center">
            {t("Our Posts")}
          </h1>
          <div className="flex flex-col  items-start gap-1">
            <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
            <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
          </div>
        </div>
        <OurPostsCarousel setApi={setApi} />
      </div>

      {canScrollNext && canScrollPrev && (
        <div className="flex mb-16 items-center gap-2 justify-center">
          <Button
            data-slot="carousel-prev"
            className={cn(
              "size-10 sm:size-12 rounded-xl cursor-pointer transition-all duration-300",
              canScrollPrev
                ? "bg-main-dark text-white hover:bg-main-dark/90"
                : "bg-neutral-300 text-main-dark hover:bg-neutral-300/70 cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="size-5 sm:size-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            data-slot="carousel-next"
            className={cn(
              "size-10 sm:size-12 rounded-xl cursor-pointer transition-all duration-300",
              canScrollNext
                ? "bg-main-dark text-white hover:bg-main-dark/90"
                : "bg-neutral-300 text-main-dark hover:bg-neutral-300/70 cursor-not-allowed"
            )}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="size-5 sm:size-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default OurPosts;
