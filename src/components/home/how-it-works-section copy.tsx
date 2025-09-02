"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, FileText, Heart, MapPin, Users } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type TimelineStepProps = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
};

export type TimelineStepHandle = {
  getElements: () => {
    container: HTMLDivElement | null;
    number: HTMLDivElement | null;
    iconContainer: HTMLDivElement | null;
    content: HTMLDivElement | null;
  };
};

const TimelineStep = forwardRef<TimelineStepHandle, TimelineStepProps>(
  ({ step, icon: Icon, title, description, index, isActive }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      getElements: () => ({
        container: containerRef.current,
        number: textContentRef.current,
        iconContainer: iconContainerRef.current,
        content: textContentRef.current,
      }),
    }));

    const isEven = index % 2 === 0;

    return (
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center w-full h-full p-4"
      >
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-x-8 md:gap-x-16">
          {/* LEFT SLOT */}
          <div className={cn("flex", isEven ? "justify-end" : "justify-start")}>
            {isEven ? (
              // Icon on Left for odd items (index 0, 2...)
              <div
                ref={iconContainerRef}
                className={cn(
                  "w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center shadow-lg border-4 border-background"
                )}
              >
                <Icon
                  className={cn(
                    "w-10 h-10 transition-colors duration-500",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </div>
            ) : (
              // Text on Left for even items (index 1, 3...)
              <div
                ref={textContentRef}
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/10 hover:shadow-2xl transition-shadow duration-300 w-full max-w-md text-right"
              >
                <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-3">
                  <span className="text-primary mr-3">{step}</span>
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            )}
          </div>

          <div className="w-4 h-4 rounded-full bg-primary/50 shadow-lg" />

          {/* RIGHT SLOT */}
          <div className={cn("flex", isEven ? "justify-start" : "justify-end")}>
            {isEven ? (
              // Text on Right for odd items (index 0, 2...)
              <div
                ref={textContentRef}
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/10 hover:shadow-2xl transition-shadow duration-300 w-full max-w-md"
              >
                <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-3">
                  <span className="text-primary mr-3">{step}</span>
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ) : (
              // Icon on Right for even items (index 1, 3...)
              <div
                ref={iconContainerRef}
                className={cn(
                  "w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center shadow-lg border-4 border-background"
                )}
              >
                <Icon
                  className={cn(
                    "w-10 h-10 transition-colors duration-500",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

TimelineStep.displayName = "TimelineStep";

const HowItWorksSection = () => {
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(TimelineStepHandle | null)[]>([]);

  const [isSnapScroll] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const validStepRefs = stepRefs.current.filter(
      Boolean
    ) as TimelineStepHandle[];
    if (validStepRefs.length !== steps.length) return;

    const masterTimeline = gsap.timeline({
      onUpdate: function () {
        const progress = this.progress();
        const newIndex = Math.floor(progress * steps.length);
        setActiveIndex(newIndex < steps.length ? newIndex : steps.length - 1);
      },
    });

    validStepRefs.forEach((stepHandle, index) => {
      const { container, content, iconContainer } = stepHandle.getElements();
      if (!container || !content || !iconContainer) return;

      const isEven = index % 2 === 0;
      const position = index;

      // Animate container in
      masterTimeline.fromTo(
        container,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        position
      );

      // Animate text content
      // For isEven (index 0,2,..), text is on the right, so slide from right (x: 50)
      // For !isEven (index 1,3,..), text is on the left, so slide from left (x: -50)
      masterTimeline.fromTo(
        content,
        { opacity: 0, x: isEven ? 50 : -50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        position
      );

      // Animate icon
      masterTimeline.fromTo(
        iconContainer,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
        `${position}+=0.1`
      );

      // Animate container out
      if (index < validStepRefs.length - 1) {
        masterTimeline.to(
          container,
          { opacity: 0, duration: 0.5 },
          position + 0.5
        );
      }
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: timelineContainerRef.current,
      scrub: 1,
      start: "top top",
      end: `+=${steps.length * 1000}`,
      animation: masterTimeline,
      snap: isSnapScroll
        ? {
            snapTo: 1 / (steps.length - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: "power1.inOut",
          }
        : undefined,
    });

    setActiveIndex(0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.set(
        validStepRefs.map((r) => r.getElements().container),
        { clearProps: "all" }
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSnapScroll]);

  return (
    <section className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center pt-20 pb-12 md:pt-32 md:pb-16">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-foreground">
          Your Healthcare Journey, Simplified
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
          We&apos;ve redesigned the healthcare experience to be simple,
          transparent, and centered around you. Follow these five steps to see
          how it works.
        </p>
      </div>

      <div ref={sectionRef}>
        <div ref={timelineContainerRef} className="relative w-full h-screen">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2" />
          {steps.map((step, index) => (
            <TimelineStep
              key={step.step}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              {...step}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
