"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TLClinicBed from "../icons/tl-clinic-bed-icon";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "step-1",
    number: "01",
    title: "Book Your Appointment",
    description:
      "Browse our specialists, pick a suitable time, and book your visit in just a few clicks — no calls, no waiting.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Visit Our Clinic",
    description:
      "Show up at the scheduled time. We'll handle the rest with care and professionalism.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Meet Your Care Team",
    description:
      "You'll be seen by our trusted doctors and staff who are here to listen, assess your needs, and provide the best possible care.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Follow Your Personalized Care Plan",
    description:
      "Whether it's treatment, medication, or a follow-up visit, we'll guide you with clear steps and continued support.",
  },
  {
    id: "step-5",
    number: "05",
    title: "We Stay With You",
    description:
      "Our care doesn't stop when your visit ends. Reach out anytime for advice, updates, or ongoing follow-up — we're always just a message away.",
  },
];

const HowItWorksSection = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepRefs.current.forEach((step) => {
      if (!step) return;

      ScrollTrigger.create({
        trigger: step,
        start: "top center", // element's top reaches viewport centre
        end: "bottom center", // element's bottom reaches viewport centre
        toggleClass: { targets: step, className: "is-active" },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="md:px-8 px-4 mt-20 relative max-w-screen">
      <div className="flex mb-8 flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-2">
          How It <span className="text-main">Works</span>
        </h1>
        <p className="max-w-2xl text-sm text-center">
          We&apos;ve made it simple. Just follow a few easy steps to get the
          care you need — fast, smooth, and tailored to you.
        </p>
      </div>
      {steps.map((step, i) => (
        <div
          key={i}
          ref={(el) => {
            stepRefs.current[i] = el;
          }}
          className={cn(
            "grid  py-16 grid-cols-2 flex-row justify-between relative items-center opacity-40 group transition-opacity duration-300",
            i % 2 === 0 ? "" : ""
          )}
        >
          <div className="absolute h-full line w-[2px] bg-main left-2/4 -translate-x-1/2" />
          <div
            className={cn(
              "bg-main flex group-hover:opacity-100 justify-center items-center rounded-full p-2 size-24",
              i % 2 === 0 ? "me-12 ml-auto order-1" : "mr-auto ms-12 order-2"
            )}
          >
            <TLClinicBed />
          </div>
          <div
            className={cn(
              "flex md:flex-row ms-4 me-4  text-[#020202] group-hover:opacity-100 gap-x-6  ",
              i % 2 === 0
                ? "text-start me-8 flex-col  order-2 mr-auto "
                : "text-end ml-auto order-1 flex-col-reverse ms-8"
            )}
          >
            <span
              className={cn(
                "text-3xl font-semibold",
                i % 2 === 0 ? "lg:ms-12 " : "order-2 lg:me-12"
              )}
            >
              {step.number}
            </span>
            <div className="flex flex-col">
              <h6 className="font-semibold text-xl">{step.title}</h6>
              <p className="max-w-sm text-sm font-normal">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorksSection;
