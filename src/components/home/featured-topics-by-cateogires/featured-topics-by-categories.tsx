import { heroBg } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../../AppContainer";
import TLArrowRight from "../../right-arrow";
import { Button } from "../../ui/button";
import TopicCategoryCard from "./topic-category-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturedTopicsByCategories = () => {
  const t = useTranslations();
  useGSAP(() => {
    gsap.to(".abt-us-categories-to-stretch", {
      opacity: 1,
      width: "48px",
      y: 0,
      scrollTrigger: {
        trigger: ".abt-us-categories-box",
        start: "top 80%",
      },
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
    });
    const categoryCards = gsap.utils.toArray(".category-card");

    categoryCards.forEach((box) => {
      gsap.fromTo(
        box as HTMLElement,
        {
          y: -50,
        },
        {
          y: 0,
          delay: 0.1,
          duration: 0.8,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: box as HTMLElement,
            start: "top 70%",
          },
        }
      );
    });
  });
  return (
    <AppContainer>
      <div className="rounded-3xl abt-us-categories-box bg-[#1C4B00] lg:py-12 py-6 mt-24 flex lg:flex-row flex-col relative">
        <Image
          src={heroBg}
          alt=""
          className="absolute size-full z-[9] inset-0 object-cover"
        />
        <div className="flex flex-col z-10 text-white lg:p-12 p-6">
          <div className="flex flex-row items-center gap-x-4">
            <div className="bg-white abt-us-categories-to-stretch h-1 rounded-full"></div>
            <span>{t("Categories")}</span>
          </div>
          <h1 className="text-4xl font-semibold max-w-md leading-12 mt-4">
            {t("Featured Topics By Category")}
          </h1>
          <Button className="group w-fit mt-8 !pe-4 !ps-6 cursor-pointer rounded-xl h-12 overflow-hidden z-10 relative hover:shadow-blue-500/30 hover:bg-main-yellow/80 transition-all duration-300 hover:scale-105 bg-main-yellow gorup">
            {t("All Categories")}
            <TLArrowRight
              className="text-white me-1 size-6 ltr:rotate-0 rtl:rotate-180 transition-transform ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>
        <div className="flex justify-center sm:flex-row flex-col items-center end-[6rem] max-w-4xl lg:-top-24 lg:absolute">
          <div className="sm:me-4 mb-4">
            <TopicCategoryCard />
          </div>
          <div className="flex sm:flex-row items-center flex-col max-w-sm sm:gap-8 gap-4 z-10 justify-center md:flex-col lg:gap-y-8 lg:me-auto lg:-top-14">
            <TopicCategoryCard />
            <TopicCategoryCard />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default FeaturedTopicsByCategories;
