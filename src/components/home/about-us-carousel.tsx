"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { aboutUsImg01, aboutUsImg02, doctorsAdImg } from "@/assets";

type CarouselItem = {
  title: string;
  description: string;
  image: StaticImageData;
  aiHint: string;
};

const carouselItems: CarouselItem[] = [
  {
    title: "Who We Are & Why Thousands Choose Us",
    description:
      "At the heart of everything we do is one goal — helping you find the perfect room without the hassle. We connect you to trusted stays, great deals, and real reviews.",
    image: aboutUsImg01,
    aiHint: "modern hotel lobby",
  },
  {
    title: "Our Commitment to Quality and Comfort",
    description:
      "We partner with top-rated hotels and properties to ensure your stay is comfortable, safe, and memorable. Our team meticulously vets each listing so you can book with confidence.",
    image: aboutUsImg02,
    aiHint: "",
  },
  {
    title: "Seamless Booking from Start to Finish",
    description:
      "Our platform is designed for ease of use. From searching for rooms to secure payment and instant confirmation, we've streamlined the process to be as smooth as possible.",
    image: doctorsAdImg,
    aiHint: "person using laptop",
  },
];

export function AboutUsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item, index) => {
            const nextItem = carouselItems[(index + 1) % carouselItems.length];
            return (
              <div className="flex-[0_0_100%] min-w-0" key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-1 items-center ">
                  <div className="lg:col-span-2 lg:pb-0 pb-6 flex flex-col justify-start relative   rounded-3xl  order-1 lg:order-2 h-full">
                    <div className="border  mb-6 rounded-4xl w-fit py-2 px-3 text-sm border-[rgba(2,2,2,0.1)] text-main">
                      About Us
                    </div>
                    <h2 className="font-headline text-xl md:text-2xl font-medium text-primary mb-4">
                      {item.title}
                    </h2>
                    <p className="font-body text-base text-foreground/80">
                      {item.description}
                    </p>

                    <div className="absolute bottom-0  z-10 flex gap-3">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            index === selectedIndex
                              ? "bg-accent scale-125"
                              : "bg-primary/30 hover:bg-primary/50"
                          )}
                          onClick={() => scrollTo(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 h-full relative rounded-3xl overflow-hidden order-1 lg:order-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain rounded-3xl"
                    />
                  </div>

                  <div className="lg:col-span-1 lg:h-full flex flex-col  order-3">
                    <div className="flex-1 relative rounded-3xl overflow-hidden ">
                      <Image
                        src={nextItem.image}
                        alt={nextItem.title}
                        className="object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex-1 mt-2 overflow-hidden flex flex-col ">
                      <h3 className="font-headline text-lg font-medium text-primary mb-2 ">
                        {nextItem.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/70 line-clamp-4 md:line-clamp-5 lg:line-clamp-4">
                        {nextItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
