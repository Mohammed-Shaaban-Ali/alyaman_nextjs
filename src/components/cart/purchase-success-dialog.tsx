"use client";
import { purchaseSuccess } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { SetStateAction } from "react";
const PurchaseSuccessDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const t = useTranslations();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] max-w-md">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="flex text-main-black flex-col text-center justify-center items-center">
          <div className="relative size-20">
            <Image src={purchaseSuccess} alt="purchaseSuccess" />
          </div>
          <p className=" sm:max-w-md max-w-[14rem] font-medium">
            {t("buyDone1")}
          </p>
          <p className="text-[#545454] text-sm max-w-xs sm:max-w-md">
            {t("buyDone2")}{" "}
            <span className="text-main font-semibold">#124845</span>.{" "}
            {t("buyDone3")}
          </p>
          <p></p>
        </div>
        <DialogFooter className="flex flex-row mt-4">
          <Button
            type="submit"
            className="flex-1 bg-main border border-main hover:bg-main/90 hover:border-main/90 cursor-pointer rounded-xl py-6"
          >
            {t("View Order")}
          </Button>
          <DialogClose asChild className="flex-1 cursor-pointer">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-main text-main py-6 rounded-xl"
            >
              {t("Done")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseSuccessDialog;
