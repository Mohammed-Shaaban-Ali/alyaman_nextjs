"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import TLComment from "../icons/tl-comment-icon";
import TLStarFill from "../icons/tl-star-fill";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";
const SessionFeedbackDialog = () => {
  const [hoverRating, setHoverRating] = useState("");
  const [currentRating, setCurrentRating] = useState<null | string>();
  const t = useTranslations();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#404040] py-6 rounded-xl cursor-pointer hover:bg-[#525252]">
          {t("Add Comment")} <TLComment />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px] max-w-[300px]">
        <DialogHeader className="text-center flex justify-center items-center">
          <DialogTitle>Session Feedback</DialogTitle>
          <DialogDescription className="text-[#545454] text-sm text-center max-w-[12rem] m-auto">
            Rate the product and help us improve.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <fieldset className="space-y-4">
              <RadioGroup
                className="inline-flex gap-0"
                onValueChange={(v) => {
                  setCurrentRating(v);
                  //   form.setValue("rate", parseInt(v));
                }}
              >
                {["1", "2", "3", "4", "5"].map((value, id) => (
                  <label
                    key={value}
                    className="group relative cursor-pointer rounded-lg p-0.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating("")}
                  >
                    <RadioGroupItem
                      id={`${id}-${value}`}
                      value={value}
                      className="sr-only"
                    />
                    <TLStarFill
                      size="28"
                      className={`transition-all ${
                        (hoverRating || parseInt(currentRating || "0")) >= value
                          ? "opacity-100"
                          : "opacity-40"
                      } group-hover:scale-110`}
                    />
                    <span className="sr-only">
                      {value} star{value === "1" ? "" : "s"}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <div className="group w-full relative">
            <label
              htmlFor={"10"}
              className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
            >
              Your Comment
            </label>
            <Textarea className="resize-none min-h-[10rem]" />
          </div>
        </div>
        <DialogFooter className="flex flex-row">
          <Button
            type="button"
            className="flex-1 cursor-pointer bg-[#404040] hover:bg-[#333]/80 border border-[#404040]"
          >
            Send
          </Button>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="flex-1 cursor-pointer border border-[#404040] hover:text-[#404040]/80 hover:bg-white text-[#404040]"
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SessionFeedbackDialog;
