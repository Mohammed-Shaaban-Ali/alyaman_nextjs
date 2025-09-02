"use client";
import React from "react";
import { Marquee } from "./ui/magicui/marquee";

const HomeMarquee = ({
  data,
}: {
  data: { description: string; id: number }[];
}) => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s] text-lg ">
        {data.map((item) => (
          <h2 key={item.id}>{item.description}</h2>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default HomeMarquee;
