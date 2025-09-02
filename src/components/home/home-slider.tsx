"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useHomeData } from "@/contexts/global/home-data";
import { useLocale, useTranslations } from "next-intl";
import AppContainer from "../AppContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Example API data - replace with your actual API call
// const sliders = [
//   {
//     id: 1,
//     title: "استكشف دورات البرمجة لدينا",
//     description: "انضم إلى دورات PHP وLaravel وابدأ رحلتك في تطوير الويب.",
//   },
//   {
//     id: 2,
//     title: "تعلم اللغات بسهولة",
//     description: "طور مهاراتك في اللغة الإنجليزية والفرنسية مع أفضل المدربين.",
//   },
//   {
//     id: 3,
//     title: "طور مسيرتك المهنية مع تدريباتنا",
//     description:
//       "اكتشف دورات متخصصة في مجالات الأعمال وتكنولوجيا المعلومات والتعليم.",
//   },
// ];

// Predefined gradient backgrounds array
const gradientBackgrounds = [
  "from-blue-600 to-purple-700",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-600",
  "from-indigo-600 to-blue-700",
  "from-purple-600 to-pink-700",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-green-600",
  "from-amber-500 to-orange-600",
  "from-red-500 to-pink-600",
  "from-slate-600 to-gray-700",
  "from-violet-600 to-purple-700",
];

// Function to get random gradient
const getRandomGradient = (index: number) => {
  return gradientBackgrounds[index % gradientBackgrounds.length];
};

const HomeSlider = () => {
  const { homeData } = useHomeData();
  const sliders = homeData.sliders || [];
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "center",
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setIsPlaying(false);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setIsPlaying(false);
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);
  const t = useTranslations();
  useGSAP(() => {
    gsap.fromTo(
      ".home-slider-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".home-slider-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      <AppContainer className="flex my-4 home-slider-section justify-center gap-2 items-center">
        <div className="flex flex-col  items-end gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
        <h1 className="font-semibold home-slider-big-title text-center text-4xl max-w-md items-center">
          {t("Explore Our Learning Opportunities")}
        </h1>
        <div className="flex flex-col  items-start gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
      </AppContainer>
      {/* Main Slider */}
      <div className="relative group">
        <div className="mt-6 absolute top-0 w-[80%] left-2/4 -translate-x-2/4 m-auto  z-20 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-main to-main/60 rounded-full transition-all duration-300"
            style={{
              width: `${((selectedIndex + 1) / sliders.length) * 100}%`,
            }}
          />
        </div>
        <div
          className="embla overflow-hidden rounded-2xl shadow-2xl"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {sliders.map((slide, index) => (
              <div
                key={slide.id}
                className={`embla__slide z-[15] flex-none w-full relative min-h-[400px] bg-gradient-to-br ${getRandomGradient(
                  index
                )}`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-8 py-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  {/* <button className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    اعرف المزيد
                  </button> */}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 ${
            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 ${
            !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Dot Indicators */}
        <div className="flex gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        {/* <button
          onClick={toggleAutoplay}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
            isPlaying
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
          }`}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span className="text-sm font-medium">
            {isPlaying ? "Pause" : "Play"}
          </span>
        </button> */}

        {/* Navigation Buttons */}
        {/* <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={16} />
            <span className="text-sm font-medium">Prev</span>
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`flex items-center gap-2 px-4 py-2 bg-main hover:bg-main text-white rounded-full transition-all duration-300 transform hover:scale-105 ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="text-sm font-medium">Next</span>
            <ChevronRight size={16} />
          </button>
        </div> */}
      </div>

      {/* Progress Bar */}
    </div>
  );
};

export default HomeSlider;
