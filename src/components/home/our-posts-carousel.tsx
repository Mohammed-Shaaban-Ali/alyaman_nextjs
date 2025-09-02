"use client";
import { postImg01 } from "@/assets";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import TLHeartIcon from "../icons/tl-heart-icon";
import TLArrowRight from "../right-arrow";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useHomeData } from "@/contexts/global/home-data";
import { useTranslations } from "next-intl";

const OurPostsCarousel = ({
  setApi,
}: {
  setApi: (api: CarouselApi) => void;
}) => {
  const { homeData } = useHomeData();
  const data = homeData.posts;
  const t = useTranslations();
  return (
    <>
      <div className="w-full flex flex-col  relative ">
        <Carousel
          setApi={setApi}
          className="w-full max-w-7xl"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="relative z-[10] -ml-2 md:-ml-4">
            {data.map((post, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-[28%]"
                data-carousel-item
              >
                <Card className="gap-3 pt-0 rounded-2xl mx-auto max-w-md h-full">
                  <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt="course"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-transparent border border-white text-white cursor-pointer px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-100 hover:text-black transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-sm sm:text-base">
                        {t("View Details")}
                      </Button>
                    </div>
                  </div>
                  <CardContent className="flex px-3 sm:px-4 mt-1 pb-4 flex-col">
                    <h3 className="font-semibold text-lg sm:text-xl leading-tight">
                      {post.title}
                    </h3>
                    <div className="flex gap-2 mt-2 flex-row items-end">
                      <p className="text-[#545454] text-sm sm:text-base leading-relaxed flex-1">
                        {post.short_description}
                      </p>
                      <div className="size-8 sm:size-10 border hover:bg-black hover:text-white duration-300 transition-all cursor-pointer border-black rounded-full aspect-square flex justify-center items-center flex-shrink-0">
                        <TLArrowRight size={20} className="sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Buttons */}
      </div>
    </>
  );
};

export default OurPostsCarousel;
