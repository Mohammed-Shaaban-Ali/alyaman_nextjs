"use client";
import { android, apple, qrCode, reviewsBG } from "@/assets";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import ReviewsSlides from "./testimonials-slides";
import { Button } from "../ui/button";

gsap.registerPlugin(Draggable);

const reviewData = [
  {
    name: "Ahmed Naser Wael",
    title: "Customer Service",
    avatar: "https://placehold.co/100x100.png",
    review:
      "ReviewFlow has completely transformed how we gather and display feedback. The user interface is intuitive and the design is clean and modern. A+!",
    rating: 5,
  },
  {
    name: "Mohamed Hossam Nabil",
    title: "General Manager",
    avatar: "https://placehold.co/100x100.png",
    review:
      "Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae in eos qui ab. Ipsam in eos qui consequatur ab cum maxime.",
    rating: 4,
  },
  {
    name: "Badr Hamza Khalid",
    title: "Web Developer",
    avatar: "https://placehold.co/100x100.png",
    review:
      "From a design perspective, this is a masterpiece. The visual connection between user and review via the timeline is brilliant. It's both beautiful and functional.",
    rating: 5,
  },
  {
    name: "Motaz Essam",
    title: "Web Developer",
    avatar: "https://placehold.co/100x100.png",
    review:
      "From a design perspective, this is a masterpiece. The visual connection between user and review via the timeline is brilliant. It's both beautiful and functional.",
    rating: 5,
  },
];

export default function MobileAdSection() {
  return (
    <div className="mt-12 py-12  relative w-full h-full">
      <div className="absolute inset-0 w-full h-full z-[1] bg-[rgba(2,2,2,0.9)]/90"></div>
      <Image
        src={reviewsBG}
        alt="bg"
        className="absolute object-cover object-top z-[-1] inset-0 w-full h-full opacity-50"
      />
      <div className="md:px-8 px-4 lg:mt-20 mt-8 relative max-w-screen">
        <div className="flex  justify-between gap-3 lg:flex-row flex-col items-center">
          <div className="flex gap-y-2 mb-12 relative z-10 justify-start items-start flex-col ">
            <h1 className="text-3xl max-w-lg text-white leading-12 font-medium">
              Plan, Book, and Travel, All From One Easy App
            </h1>
            <p className="text-sm max-w-md  my-4 text-[rgba(181,181,181,1)]">
              Get access to thousands of rooms, exclusive deals, and instant
              bookings — all from your phone.
            </p>
            <div className="flex flex-row text-white">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">25K+</span>
                <span className="text-[rgba(181,181,181,1)] text-sm">
                  Download
                </span>
              </div>
              <div className="w-[1px] h-12 rounded-full bg-[rgba(107,107,107,1)] mx-4"></div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">3500+</span>
                <span className="text-[rgba(181,181,181,1)] text-sm">
                  Review
                </span>
              </div>
              <div className="w-[1px] h-12 rounded-full bg-[rgba(107,107,107,1)] mx-4"></div>

              <div className="flex flex-col">
                <span className="text-lg font-semibold">5000+</span>
                <span className="text-[rgba(181,181,181,1)] text-sm">
                  Visitor
                </span>
              </div>
            </div>
          </div>
          <div className="flex z-10 gap-x-8 gap-y-8 sm:flex-row flex-col">
            <div className="bg-white/10 relative flex flex-col gap-y-14 rounded-2xl p-6 w-[290px]">
              <div className="flex flex-col text-white">
                <div className="flex flex-row  justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="text-xl">For Android</h3>
                  </div>
                  <Button className="bg-transparent h-10 text-xs hover:bg-transparent cursor-pointer rounded-xl border-white border">
                    Download
                  </Button>
                </div>
                <h3 className="text-sm">Android 12</h3>
              </div>
              <div className="relative size-24 rounded-lg bg-white p-3">
                <div className="relative z-10 w-full h-full rounded-2xl bg-white/10">
                  <Image src={qrCode} alt="qrcode" className="object-cover" />
                </div>
              </div>
              <div
                className="absolute end-0 w-24 h-24 bottom-0 bg-[#201D20]
              ltr:rounded-tl-[3rem] rtl:rounded-tr-[3rem]"
              >
                <div className="relative w-full h-full rounded-full ">
                  <div className="relative size-12 left-2/4 -translate-2/4 top-2/4 -translate-y-2/4">
                    <Image
                      src={android}
                      alt="app-icon"
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 relative flex flex-col gap-y-14 rounded-2xl p-6 w-[290px]">
              <div className="flex flex-col text-white">
                <div className="flex flex-row  justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="text-xl">For IOS</h3>
                  </div>
                  <Button className="bg-transparent h-10 text-xs hover:bg-transparent cursor-pointer rounded-xl border-white border">
                    Download
                  </Button>
                </div>
                <h3 className="text-sm">IOS 15.6</h3>
              </div>
              <div className="relative size-24 rounded-lg bg-white p-3">
                <div className="relative z-10 w-full h-full rounded-2xl bg-white/10">
                  <Image src={qrCode} alt="qrcode" className="object-cover" />
                </div>
              </div>
              <div
                className="absolute end-0 w-24 h-24 bottom-0 bg-[#201D20]
              ltr:rounded-tl-[3rem] rtl:rounded-tr-[3rem]"
              >
                <div className="relative w-full h-full rounded-full ">
                  <div className="relative size-12 left-2/4 -translate-2/4 top-2/4 -translate-y-2/4">
                    <Image
                      src={apple}
                      alt="app-icon"
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
