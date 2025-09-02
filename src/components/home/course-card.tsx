import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import TLStarFill from "../icons/tl-star-fill";
import { courseImg01, userImg } from "@/assets";
import TLPersonGraduated from "../icons/tl-person-graduated";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import TLHeartIcon from "../icons/tl-heart-icon";

const CourseCard = () => {
  const t = useTranslations();
  return (
    <Card className="p-2 gap-3 rounded-2xl xl:col-span-4 lg:col-span-4 md:col-span-2 col-span-1">
      <div className="relative  group overflow-hidden rounded-xl">
        <Image
          src={courseImg01}
          alt="course"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="size-10 cursor-pointer flex absolute transition-all duration-500 transform opacity-0 group-hover:opacity-100 rounded-md justify-center items-center end-4 top-4 bg-white">
            <TLHeartIcon />
          </div>
          <Button className="bg-transparent border border-white text-white cursor-pointer px-2 py-2 rounded-lg font-medium hover:bg-gray-100 hover:text-black transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            View Details
          </Button>
        </div>
      </div>{" "}
      <CardContent className="flex px-1 mt-1 flex-col">
        <h3 className="font-medium">
          Web Development For Beginner to Advanced Level One
        </h3>
        <div className="flex mt-4 flex-row items-center">
          <div className="flex flex-row items-center gap-1">
            <TLStarFill className="text-main" />
            <span>4.5</span>
            <span className="text-[#b5b5b5] text-xs">(1202)</span>
          </div>
          <div className="bg-[#E8E8E8] mx-4 h-6 w-[2px] rounded-full" />
          <div className="flex flex-row gap-1 items-center">
            <TLPersonGraduated />
            <span className="text-sm">650 Student</span>
          </div>
        </div>
        <div className="flex mt-4 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="lg:size-[2.5rem] size-6">
              <AvatarImage src={userImg.src} alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <h6 className="font-medium text-sm ">Mohamed Ali</h6>
          </div>
          <div className="flex text-sm flex-row items-center gap-x-2">
            <span className="text-main-yellow">250 {t("AED")}</span>
            <span className="line-through text-xs text-main-yellow/70">
              300 {t("AED")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
