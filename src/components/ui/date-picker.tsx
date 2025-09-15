"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLocale, useTranslations } from "next-intl";
import { arEG, enUS } from "date-fns/locale";
import { Label } from "./label";
import { useFormContext } from "react-hook-form";

export function DatePickerDemo() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const locale = useLocale();
  const t = useTranslations();
  const form = useFormContext();
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {t("Birth Date")}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="">
          <Button
            variant="outline"
            id="date"
            className="w-full h-14 rounded-2xl flex-row-reverse justify-between font-normal"
          >
            <CalendarIcon />
            {date
              ? format(date, "yyyy-MM-dd", {
                  locale: locale === "ar" ? arEG : enUS,
                })
              : t("Pick a date")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              if (date) {
                const formatted = format(date, "yyyy-MM-dd");
                form.setValue("birth_date", formatted);
              }

              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
