"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    id: "1",
    title: "Do I get a certificate after completing a course?",
    content:
      "Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,",
  },
  {
    id: "2",
    title: "Is the content suitable for all age groups?",
    content:
      "Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,",
  },
  {
    id: "3",
    title: "How can I contact the instructor if I have questions?",
    content:
      "Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,",
  },
  {
    id: "4",
    title: "Are the courses free or paid?",
    content:
      "Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,",
  },
  {
    id: "5",
    title: "Can I study at any time?",
    content:
      "Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,Lorem ipsum dolor sit amet, conummy dolor sit amet,",
  },
];

const ExpansionPanel08 = ({
  questions,
}: {
  questions: {
    id: number;
    question: string;
    answer: string;
  }[];
}) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {questions?.map((item) => (
        <AccordionItem
          value={`${item.id}`}
          key={item.id}
          className="group relative rounded-2xl border-0 bg-white h-full py-2 px-6"
        >
          {/* Left border with top/bottom spacing */}
          <div className="absolute start-2 rounded-4xl top-0 bottom-0 w-1 bg-main-orange/50 transition-all duration-300 group-data-[state=open]:bg-main-orange" />

          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group cursor-pointer  ps-2 text-black focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left md:text-xl leading-6 font-medium group-data-[state=open]:font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50">
              {item.question}
              <div className="relative cursor-pointer size-6  flex items-center justify-center">
                <span className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-transform duration-300 group-data-[state=open]:rotate-180 text-black">
                  <ChevronDown
                    size={22}
                    className="pointer-events-none shrink-0 "
                    aria-hidden="true"
                  />
                </span>
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="text-black  text-lg pb-2 ps-2">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ExpansionPanel08;
