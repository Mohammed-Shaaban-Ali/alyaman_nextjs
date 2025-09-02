"use client";
import { discountVoucher } from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PaymentAddress from "./payment-address";
import PurchaseSuccessDialog from "./purchase-success-dialog";

const PaymentSummary = () => {
  const t = useTranslations();
  const [isCoupon, setIsCoupon] = useState(false);
  const [successCheckout, setSuccessCheckout] = useState(false);

  return (
    <div className="p-4">
      <PurchaseSuccessDialog
        isOpen={successCheckout}
        setIsOpen={setSuccessCheckout}
      />
      <div className=" flex flex-col gap-3 font-medium text-sm md:text-base">
        <AnimatePresence initial={false} mode="wait">
          {isCoupon ? (
            <motion.div
              key="coupon-applied"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-y-2 h-[6rem]"
            >
              <Label className="text-lg font-semibold" htmlFor={"coupon"}>
                {t("Promo Code")}
              </Label>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <div className="relative size-12">
                    <Image src={discountVoucher} alt={"voucher"} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#8C8C8C]">{t("Coupon Code")}</p>
                    <span className="font-semibold text-main-black text-base">
                      AQWSXMOI232
                    </span>
                  </div>
                </div>
                <div
                  className="underline select-none cursor-pointer text-sm text-[#D90202]"
                  onClick={() => setIsCoupon(false)}
                >
                  {t("Remove")}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="coupon-input"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-y-2 h-[6rem]"
            >
              <Label className="text-lg font-semibold" htmlFor={"coupon"}>
                {t("Promo Code")}
              </Label>
              <div className="relative">
                <Input
                  id="coupon"
                  className="peer pe-12 py-6"
                  placeholder={t("Apply Code Here")}
                  type="text"
                />
                <span
                  onClick={() => setIsCoupon(true)}
                  className="text-[#404040] select-none underline cursor-pointer absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
                >
                  {t("Apply")}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <hr />
        <div className="flex flex-col gap-y-4">
          <p className="text-lg font-semibold">{t("Payment Summary")}</p>
          <div className="flex items-center justify-between ">
            <p className="text-[#545454]">{t("Number Of Items")}</p>
            <p>
              {5} {t("items")}
            </p>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[#545454]">{t("Order Price")}</p>
            <p>
              {310} {t("AED")}
            </p>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[#545454]">{t("Delivery")}</p>
            <p>
              {10} {t("AED")}
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-[#545454]">{t("Total Order")}</p>
            <p>
              {300} {t("AED")}
            </p>
          </div>
        </div>
      </div>
      <PaymentAddress />
      <Button
        onClick={() => setSuccessCheckout(true)}
        className="w-full rounded-xl py-6 bg-[#404040] hover:bg-[#404040]/90 cursor-pointer"
      >
        {t("Checkout")}
      </Button>
    </div>
  );
};

export default PaymentSummary;
