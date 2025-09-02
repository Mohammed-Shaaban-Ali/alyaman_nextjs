import React, { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
const HeroSearchBox = () => {
  const id = useId();

  return (
    <div className="sm:grid z-[21] flex flex-col w-full relative lg:grid-cols-9 sm:grid-cols-2 grid-cols-1 gap-4 bg-white p-8 rounded-3xl">
      <div className="group relative lg:col-span-2 col-span-1">
        <label
          htmlFor={id}
          className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Location
        </label>
        <Select>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder="Select Your Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Egypt</SelectItem>
            <SelectItem value="2">USA</SelectItem>
            <SelectItem value="3">UAE</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="group relative lg:col-span-2 col-span-1">
        <label
          htmlFor={id}
          className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Person
        </label>
        <Select>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder="Select Your Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Egypt</SelectItem>
            <SelectItem value="2">USA</SelectItem>
            <SelectItem value="3">UAE</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="group relative lg:col-span-2 col-span-1">
        <label
          htmlFor={id}
          className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Check-In
        </label>
        <Select>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder="Select Your Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Egypt</SelectItem>
            <SelectItem value="2">USA</SelectItem>
            <SelectItem value="3">UAE</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="group relative lg:col-span-2 col-span-1">
        <label
          htmlFor={id}
          className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Check-Out
        </label>
        <Select>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder="Select Your Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Egypt</SelectItem>
            <SelectItem value="2">USA</SelectItem>
            <SelectItem value="3">UAE</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="lg:col-span-1 col-span-2 w-full flex justify-center items-center m-auto">
        <Button className="bg-main transition-all  w-full cursor-pointer h-14 text-sm hover:bg-main/75 text-white">
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
