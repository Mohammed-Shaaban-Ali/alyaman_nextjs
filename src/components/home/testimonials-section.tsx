"use client";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useTranslations } from "next-intl";
import TestimonialsSlides from "./testimonials-slides";
import { useGSAP } from "@gsap/react";

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

export default function TestimonialsSection() {
  const t = useTranslations();

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-slider",
      { opacity: 0, x: 50 },
      {
        scrollTrigger: {
          trigger: ".testimonial-slider",
          start: "top 80%",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".testimonial-data",
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: ".testimonial-data",
          start: "top 80%",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <div className="relative overflow-hidden my-26">
      <div className="lg:ms-[4rem] ms-[0.6rem] h-full grid lg:grid-cols-7 grid-cols-1">
        <div className="flex testimonial-data justify-start lg:col-span-3 flex-col items-start">
          <div className="flex justify-center gap-x-2 items-center">
            <div className="bg-main w-14 h-1 rounded-full"></div>
            <h3 className="text-main text-base font-medium">
              {t("Testimonials From Who Used This")}
            </h3>
          </div>
          <h1 className="font-semibold mt-4 text-start text-4xl max-w-lg items-center">
            {t("See What Our Lovely Students Says")}{" "}
            <span className="text-main">{t("About Us2")}</span>
          </h1>
          <p className="max-w-lg mt-8">
            Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae in eos
            qui ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum Soluta
            dolor quae{" "}
          </p>
        </div>
        <TestimonialsSlides />
      </div>
    </div>
  );
}
