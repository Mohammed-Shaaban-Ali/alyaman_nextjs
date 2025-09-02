"use client";
import { doubleQoute, userImg } from "@/assets";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const TestimonialsSlides = () => {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const locale = useLocale();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return (
    <div className="relative opacity-0 testimonial-slider lg:mt-0 mt-16 h-[350px] w-full md:ms-10 lg:col-span-4 lg:col-start-4">
      <div className="bg-[#EBF3E6] start-[3rem] rounded-3xl h-full z-[9] absolute inset-0 size-full"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center ">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
          }}
          className="w-full z-10 h-auto relative"
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-[100%] md:basis-[50%] lg:basis-[60%] xl:basis-[60%]"
              >
                <div className="p-2">
                  <Card className="min-h-[200px]">
                    <CardContent className="flex flex-col">
                      <Image
                        src={doubleQoute}
                        alt="qoute"
                        className="size-8 object-contain"
                      />
                      <p className=" ">
                        Ipsam in eos qui consequatur ab cum maxime.Soluta dolor
                        quae in eos qui ab .Soluta dolor quae Ipsam in eos
                        quconsequatur ab cum Soluta dolor quae oluta dolor ab
                        cum Soluta dolor quae
                      </p>
                      <div className="flex mt-4 flex-row items-center gap-2">
                        <Avatar className="lg:size-[2.5rem] size-8">
                          <AvatarImage src={userImg.src} alt="@leerob" />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <h6 className="font-medium text-sm ">Mohamed Ali</h6>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`rounded-full cursor-pointer transition-all duration-300 ${
              current === i + 1
                ? "w-8 h-2 bg-main-yellow"
                : "w-2 h-2 bg-main-yellow/80 hover:bg-main-yellow"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlides;
