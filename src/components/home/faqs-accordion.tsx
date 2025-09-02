"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
const FaqsAccordion = () => {
  const items = [
    {
      id: "1",
      title: "What is your return and exchange policy?",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,",
    },
    {
      id: "2",
      title: "How Can i Contact Customer Support For assistance?",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,",
    },
    {
      id: "3",
      title: "How do i Choose the right Product for my ?",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,",
    },
    {
      id: "4",
      title: "What is your return and exchange policy?",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,",
    },
    {
      id: "5",
      title: "How Can i Contact Customer Support For assistance?",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit yes for amet, consectetuer  elit, sed diam nonummy dolor sit amet,",
    },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3 rounded-2xl"
    >
      {items.map((item) => (
        <AccordionItem
          value={item.id}
          key={item.id}
          className="bg-white last:border-b border text-[#404040] rounded-3xl py-3 px-6 transition-[background,color] duration-300 ease-in-out data-[state=open]:bg-gradient-to-br data-[state=open]:from-[#1B1B1B] data-[state=open]:to-[#404040] data-[state=open]:text-white"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="cursor-pointer  focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-t-md py-5 text-left text-sm text-[15px] leading-6 font-semibold outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
              {item.title}
              <PlusIcon
                size={22}
                className="pointer-events-none shrink-0 transition-transform duration-200 text-current"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="pb-2 border-t-[#7F7F7F]  border-t">
            <div className="mt-3">{item.content}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqsAccordion;
