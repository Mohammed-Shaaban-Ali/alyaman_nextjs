import React from "react";
import MultipleSelector01 from "./ui/multi-select-01";

const Filters = () => {
  const OPTIONS = [
    { label: "Soft", value: "Soft" },
    { label: "Cotton", value: "Cotton" },
    { label: "test1", value: "Test1" },
    { label: "test2", value: "Test2" },
    { label: "test3", value: "Test3" },
  ];
  return (
    <>
      <div className="flex flex-row gap-x-3 items-center">
        <h2 className="text-base font-semibold">Filter Option</h2>
        <span className="text-[#168500] cursor-pointer underline text-sm">
          Clear All
        </span>
      </div>
      <div className="flex lg:flex-row w-full flex-col gap-y-6 items-center justify-center lg:justify-start flex-wrap gap-x-4">
        <div className="group w-full lg:w-fit relative">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Material
          </label>
          <MultipleSelector01
            hidePlaceholderWhenSelected
            className="lg:max-w-[300px] w-full"
            defaultOptions={OPTIONS}
            placeholder="Select Material"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
        <div className="group relative  lg:w-fit w-full">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Type
          </label>
          <MultipleSelector01
            hidePlaceholderWhenSelected
            className="lg:max-w-[300px] w-full"
            defaultOptions={OPTIONS}
            placeholder="Please Select Type"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
        <div className="group relative  lg:w-fit w-full">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Brand
          </label>
          <MultipleSelector01
            hidePlaceholderWhenSelected
            className="lg:max-w-[300px] w-full"
            defaultOptions={OPTIONS}
            placeholder="Please Select Type"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
        <div className="group relative  lg:w-fit w-full">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Rating
          </label>
          <MultipleSelector01
            hidePlaceholderWhenSelected
            className="lg:max-w-[300px] w-full"
            defaultOptions={OPTIONS}
            placeholder="Please Select Type"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Filters;
