"use client";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const ItemQuantity = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="flex sm:text-sm md:text-lg text-xs items-center flex-row gap-2">
      <Minus
        className={cn(
          "cursor-pointer size-4 md:size-6",
          count === 1 && "opacity-60 pointer-events-none"
        )}
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      />
      <span className="select-none w-6 text-center">
        {String(count).padStart(2, "0")}
      </span>
      <Plus
        className="cursor-pointer size-4 md:size-6"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};

export default ItemQuantity;
