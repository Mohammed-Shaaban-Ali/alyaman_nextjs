"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, FileText, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TimelineStep = ({
  step,
  icon: Icon,
  title,
  description,
  index,
}: {
  step: string;
  icon: React.ElementType;
  title: string;
  description: string;
  isActive?: boolean;
  index: number;
}) => {
  const stepRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const element = stepRef.current;
    const number = numberRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;

    gsap.set(content, { opacity: 0, x: index % 2 === 0 ? -50 : 50 });
    gsap.set(number, { scale: 0.8, opacity: 0.5 });
    gsap.set(icon, { scale: 0, rotation: -180 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap
          .timeline()
          .to(number, {
            scale: 1.2,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          })
          .to(
            icon,
            { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.2"
          )
          .to(
            content,
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          )
          .to(number, { scale: 1, duration: 0.2, ease: "power2.out" }, "-=0.4");
      },
      onLeave: () => {
        gsap.to([content, number, icon], {
          opacity: 0.6,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        gsap.to([content, number, icon], {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      },
      onLeaveBack: () => {
        gsap.to(content, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.3,
        });
        gsap.to(number, { scale: 0.8, opacity: 0.5, duration: 0.3 });
        gsap.to(icon, { scale: 0, rotation: -180, duration: 0.3 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  return (
    <div ref={stepRef} className="relative mb-24">
      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2 z-0"></div>

      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
        <div
          ref={numberRef}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
        >
          <span className="text-white font-bold text-lg">{step}</span>
        </div>
      </div>

      <div
        className={`flex ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        } pt-4`}
      >
        <div
          ref={contentRef}
          className={`max-w-md ${
            index % 2 === 0 ? "mr-auto pr-20" : "ml-auto pl-20"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            {/* Icon */}
            <div className="mb-6">
              <div
                ref={iconRef}
                className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center"
              >
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Book Your Appointment",
      description:
        "Choose a date and time that works for you. Just click, select, and book your visit in just a few clicks — no calls, no waiting.",
    },
    {
      step: "02",
      icon: MapPin,
      title: "Visit Our Clinic",
      description:
        "Arrive at our clinic at your chosen time, and we'll take care of the rest. Our team ensures a smooth and welcoming check-in experience.",
    },
    {
      step: "03",
      icon: Users,
      title: "Meet Your Care Team",
      description:
        "You'll be seen by our trusted doctors and staff who are here to listen, discuss your needs and provide the best possible care.",
    },
    {
      step: "04",
      icon: FileText,
      title: "Follow Your Personalized Care Plan",
      description:
        "Whether it's treatment, medication, or a follow-up visit, we'll guide you with clear steps and continued support.",
    },
    {
      step: "05",
      icon: Heart,
      title: "We Stay With You",
      description:
        "Our care doesn't stop when your visit ends. Reach out anytime for advice, updates, or ongoing follow-up — we're always just a message away.",
    },
  ];

  useEffect(() => {
    const title = titleRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.to(window, {
      duration: 5,
      ease: "power2.out",
      scrollBehavior: "smooth",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="md:px-8 px-4 mt-20 relative max-w-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-2">
          How It <span className="text-main">Works</span>
        </h1>
        <p className="max-w-2xl text-sm text-center">
          We&apos;ve made it simple. Just follow a few easy steps to get the
          care you need — fast, smooth, and tailored to you.
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="pt-20 pb-16 text-center">
          <h1 ref={titleRef} className="text-5xl font-bold text-gray-800 mb-4">
            Your Healthcare Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless care from booking to follow-up
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto px-8 pb-20"
        >
          {steps.map((step, index) => (
            <TimelineStep
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="h-40 bg-gradient-to-t from-blue-100 to-transparent"></div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
