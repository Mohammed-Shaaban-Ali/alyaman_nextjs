import React from "react";
import { Button } from "../ui/button";
import TLArrowRight from "../right-arrow";
import TLStarBadge from "../icons/tl-star-badge";
import { courseImg01, room01, room02, room03, userImg } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TLStarFill from "../icons/tl-star-fill";
import AppContainer from "../AppContainer";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from "@/components/animate-ui/radix/tabs";
import { Card, CardContent } from "../ui/card";
import TLPersonGraduated from "../icons/tl-person-graduated";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useLocale, useTranslations } from "next-intl";
import CourseCard from "./course-card";

const CoursesListSection = () => {
  const tabs = [
    {
      id: "web-design",
      title: "Web Design",
    },
    {
      id: "web-development",
      title: "Web Development",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
    },
    {
      id: "content-writing",
      title: "Content Writing",
    },
    {
      id: "marketing",
      title: "Marketing",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
    },
  ];
  const t = useTranslations();
  const locale = useLocale();
  return (
    <AppContainer>
      <div className="flex justify-start flex-col items-start">
        <div className="flex justify-center gap-x-2 items-center">
          <div className="bg-main w-14 h-1 rounded-full"></div>
          <h3 className="text-main text-base font-medium">
            {t("Recommended Courses")}
          </h3>
        </div>
        {locale === "en" ? (
          <h1 className="font-semibold mt-4 text-start text-4xl max-w-xl items-center">
            {t("Choice of Our Popular")}{" "}
            <span className="text-main">{t("Courses")}</span>
          </h1>
        ) : (
          <h1 className="font-semibold mt-4 text-start text-4xl max-w-xl items-center">
            {t("Choice of")} <span className="text-main">{t("Courses")}</span>{" "}
            {t("Popular-we-have")}
          </h1>
        )}
      </div>
      <Tabs defaultValue={tabs[0].id} className="mt-8">
        <TabsList className=" flex-wrap flex rtl:flex-row-reverse gap-2 lg:gap-4 h-auto ltr:justify-start ltr:items-start rtl:justify-start rtl:items-start ">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContents>
          {Array.from({ length: 6 }).map((_, i) => (
            <TabsContent key={i} value={tabs[i].id}>
              <div className="mt-8 grid xl:grid-cols-16 lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                {Array.from({ length: 8 }).map((__, j) => (
                  <CourseCard key={j} />
                ))}
              </div>
            </TabsContent>
          ))}
        </TabsContents>
      </Tabs>
      <div className="flex mt-16 justify-center items-center">
        <Button className="group/button h-12 px-8 relative overflow-hidden rounded-xl border border-main bg-white cursor-pointer py-1 text-sm font-medium text-main transition-all duration-150 hover:bg-transparent hover:border-main active:scale-95">
          <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-main to-main/70 transition-all duration-500 group-hover/button:h-full" />
          <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
            {t("View More")}
          </span>
        </Button>
      </div>
    </AppContainer>
  );
};

export default CoursesListSection;
