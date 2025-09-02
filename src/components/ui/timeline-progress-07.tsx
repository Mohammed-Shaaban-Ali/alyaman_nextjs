"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  steps: { title: string; description?: string }[];
}

export function TimelineProgress07({
  value,
  steps,
  className,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn("flex flex-col items-start w-full", className)}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted = index < value;
        const isCurrent = index === value;
        const isNext = index === value + 1;
        const isUpcoming = index > value + 1;

        const hasConnector = index < steps.length - 1;
        // const isConnectorFullyCompleted = index < value - 1;
        // const isConnectorAfterLastCompleted = index === value - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full text-white font-medium text-lg",
                    isCompleted && "bg-main",
                    isCurrent && "border-2 border-main text-main",
                    isNext && "border-2  border-main  text-main",
                    isUpcoming && "border-2 border-main text-main "
                  )}
                >
                  {isCompleted ? <Check /> : String(index + 1).padStart(2, "0")}
                </div>
                {hasConnector && <div className={cn("w-[2px] h-16 bg-main")} />}
              </div>
              <div className="ml-4 mt-2">
                <div className={cn("text-[#020202]")}>
                  <h6 className="font-medium">{step.title}</h6>
                  <p className="max-w-xl text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
