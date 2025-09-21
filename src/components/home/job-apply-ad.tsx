"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mentorBG, mentor01 } from "@/assets";
import { Button } from "../ui/button";
import TLArrowRight from "../right-arrow";
import { useTranslations } from "next-intl";

const JobApplyAd = () => {
  const t = useTranslations();
  return (
    <div className="md:px-8 px-4 mt-12 relative max-w-screen">
      <div className="relative overflow-hidden rounded-3xl  py-8">
        <div className="absolute z-[1] inset-0 bg-gradient-to-r from-[rgba(0,32,64,0.9)] to-[rgba(22,102,181,0.6)]" />

        <div className="relative z-[2] justify-center w-full flex gap-6 md:gap-10 items-center md:flex-row flex-col-reverse px-6 md:px-10 py-8 md:py-12">
          <div className="flex-1 flex items-center w-full flex-col justify-center text-white">
            <h2 className="text-2xl md:text-5xl font-bold leading-tight ">
              {t("Share Your Expertise Inspire Learners")}
            </h2>
            <p className="text-white/90 md:text-lg text-center text-sm leading-relaxed max-w-xl mb-6">
              {t("job-apply-desc")}
            </p>
            <div className="flex items-center gap-4">
              <Link href="/job-apply" className="group">
                <Button className="group text-lg inline-flex h-12 cursor-pointer items-center justify-center rounded-full px-6 font-medium bg-main hover:bg-main/85 duration-500 transition-all shadow-lg hover:shadow-main/30">
                  {t("Apply to Job")}
                  <TLArrowRight
                    className="ms-2 size-5 text-white transition-transform ltr:group-hover:translate-x-0.5 ltr:rotate-0 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <span className="text-white/70 text-base">
                {t("Become an instructor today")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplyAd;
