import React from "react";
import MultipleSelector01 from "../ui/multi-select-01";
import { useTranslations } from "next-intl";
const OPTIONS = [
  { label: "From 1 to 2", value: "1", min_rate: 1, max_rate: 2 },
  { label: "From 2 to 3", value: "2", min_rate: 2, max_rate: 3 },
  { label: "From 3 to 4", value: "3", min_rate: 3, max_rate: 4 },
  { label: "From 4 to 5", value: "4", min_rate: 4, max_rate: 5 },
];
const CoursesFilters = () => {
  const t = useTranslations();
  return (
    <div className="flex mt-12 mb-6 items-center">
      <div className="group relative lg:w-fit w-full">
        <label
          htmlFor="rating"
          className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          {t("Ratings")}
        </label>
        <MultipleSelector01
          onChange={() => {}}
          hidePlaceholderWhenSelected
          className="lg:max-w-[300px] w-full"
          defaultOptions={OPTIONS.map((opt) => ({
            label: opt.label,
            value: opt.value,
            min_rate: opt.min_rate.toString(),
            max_rate: opt.max_rate.toString(),
          }))}
          placeholder={`${t("select") + " " + t("rate")} `}
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              no results found.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default CoursesFilters;
