"use client";
import { doctorsAdBG, doctorsAdImg } from "@/assets";
import Image from "next/image";
import TLFacebook from "../icons/tl-facebook-icon";
import TLinstagram from "../icons/tl-instagram-icon";
import TLLinkedIn from "../icons/tl-linkedin-icon";
import TLWhatsapp from "../icons/tl-whatsapp-icon";
import TLArrowRight from "../right-arrow";
import { Button } from "../ui/button";

export default function DoctorsAdBoxSection() {
  return (
    <div className="md:px-8 px-4 mt-12 relative max-w-screen">
      <div className="relative flex lg:flex-row flex-col-reverse min-h-[400px] rounded-3xl bg-gradient-to-r from-[rgba(22,102,181,1)] to-[rgba(0,32,64,1)]">
        <Image
          src={doctorsAdBG}
          alt="bg"
          className="absolute z-[5] inset-0 w-full h-full rounded-3xl object-cover "
        />
        <div className="flex-1 z-[6] relative flex items-end">
          <div className="relative w-full lg:h-[500px] h-[300px]">
            <Image
              src={doctorsAdImg}
              alt="bg"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
        <div className="flex-1 z-[6] flex flex-col justify-center px-8 md:py-12 py-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Need Help? We&apos;re Always Here to Support You
          </h2>

          <p className="text-white/90 text-base mb-8 leading-relaxed max-w-md">
            Whether you have a question, need guidance, or just want to talk to
            someone - our team is always ready to support you. Don&apos;t
            hesitate to reach out.
          </p>
          <div className="flex lg:flex-row flex-col items-center gap-6">
            <Button className="group w-fit !pe-4 !ps-6 cursor-pointer rounded-full h-12 overflow-hidden z-10 relative hover:shadow-blue-500/30 hover:bg-main/80 transition-all duration-300 hover:scale-105 bg-main gorup">
              Contact Us Now
              <TLArrowRight
                className="text-white me-1 size-6 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <div className="h-1 lg:block hidden rounded-full w-28 bg-white"></div>
            <div className="flex gap-3 items-center ">
              <div className="cursor-pointer">
                <TLinstagram className="w-5 h-5 text-white" />
              </div>
              <div className="cursor-pointer">
                <TLFacebook className="w-5 h-5 text-white" />
              </div>
              <div className="cursor-pointer">
                <TLLinkedIn className="w-5 h-5 text-white" />
              </div>
              <div className="cursor-pointer">
                <TLWhatsapp className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
