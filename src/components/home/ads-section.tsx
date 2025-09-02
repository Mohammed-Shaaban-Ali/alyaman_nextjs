"use client";
import React from "react";
import HomeMarquee from "../home-marquee";
import { useHomeData } from "@/contexts/global/home-data";

const AdsSection = () => {
  const data = [
    { description: "ALYAMAN", id: 1 },
    { description: "ALYAMAN", id: 2 },
    { description: "ALYAMAN", id: 3 },
  ];
  const { homeData } = useHomeData();
  return (
    <div>
      <HomeMarquee data={homeData.ads} />
    </div>
  );
};

export default AdsSection;
