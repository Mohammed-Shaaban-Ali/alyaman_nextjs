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
import PostCard from "../posts/post-card";

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
                <PostCard post={post} key={post.id} />
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
