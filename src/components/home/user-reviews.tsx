"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useHomeData } from "@/contexts/global/home-data";
import TLStar from "../icons/tl-star";
import TLStarFill from "../icons/tl-star-fill";
import AppContainer from "../AppContainer";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DURATION = 5000; // ms
const BAR_WIDTH = 50;
const CIRCLE_SIZE = 12;

export function TestimonialsSimple() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { homeData } = useHomeData();
  const data = homeData.customer_feedback;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // Jump to a specific review
  const goToReview = (i: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndex(i);
  };
  const normalizedRating = Math.min(
    Math.max(100, 0),
    parseInt(data[index].rating)
  );
  const t = useTranslations();

  useGSAP(() => {
    gsap.fromTo(
      ".user-reviews-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".user-reviews-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <>
      <AppContainer className="flex user-reviews-section justify-center gap-2 items-center">
        <div className="flex flex-col  items-end gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
        <h1 className="font-semibold user-reviews-big-title text-center text-4xl max-w-md items-center">
          {t("Clients Reviews")}
        </h1>
        <div className="flex flex-col  items-start gap-1">
          <div className="w-7 border-t-2 border-main-orange rounded-full"></div>
          <div className="w-10 border-t-2 border-main-orange rounded-full"></div>
        </div>
      </AppContainer>
      <section className="bg-background relative flex flex-col items-center pt-10 pb-16">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center px-4">
          <div className="min-h-[120px] w-full">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="text-foreground mb-8 text-center text-2xl leading-tight font-semibold md:text-4xl"
              >
                “{data[index].description}”
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="flex w-full max-w-lg items-center justify-center gap-8 lg:pt-8 pt-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ type: "spring", duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <Image
                  src={data[index].image}
                  alt={data[index].name + " avatar"}
                  width={48}
                  height={48}
                  className="bg-foreground/10 h-12 w-12 rounded-full border object-cover"
                />
                <div className="border-muted-foreground/30 mx-4 h-8 border-l" />
                <div className="text-left">
                  <div className="text-foreground text-lg font-medium italic">
                    {data[index].name}
                  </div>
                  <div className="text-muted-foreground text-base">
                    <div className="stars flex flex-row gap-1 items-center">
                      {[...Array(5)].map((_, index) =>
                        index < normalizedRating ? (
                          <TLStarFill key={index} className="text-main" />
                        ) : (
                          <TLStar key={index} className="" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Progress Bar & Circles Indicator */}
          <div className="mx-auto mt-8 flex w-full max-w-lg justify-center gap-3">
            {data.map((_, i) => {
              const isActive = i === index;
              return (
                <motion.button
                  key={i}
                  layout
                  initial={false}
                  animate={{
                    width: isActive ? BAR_WIDTH : CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: isActive ? 8 : 999,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4,
                  }}
                  className="bg-foreground/10 relative block overflow-hidden border-0 p-0 focus:outline-none"
                  style={{
                    minWidth: CIRCLE_SIZE,
                    maxWidth: BAR_WIDTH,
                    cursor: "pointer",
                  }}
                  onClick={() => goToReview(i)}
                  aria-label={`Go to review ${i + 1}`}
                  tabIndex={0}
                >
                  {isActive && (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                      className="bg-main absolute top-0 left-0 h-full rounded-lg"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
