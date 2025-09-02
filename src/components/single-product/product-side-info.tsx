import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import SelectMenu01 from "../ui/select-menu-01";
import TLHeartIcon from "../icons/tl-heart-icon";
import TLAddToCart from "../icons/tl-add-to-cart-icon";
import Stepper02 from "../ui/stepper-02";
import { Button } from "../ui/button";
import TLShoppingBag from "../icons/tl-shopping-bag-icon";
import { useTranslations } from "next-intl";

const ProductSideInfo = () => {
  const t = useTranslations();
  return (
    <div className="data lg:col-span-7 col-span-full gap-y-4 justify-start items-start flex flex-col">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="category border px-4 py-1 font-medium rounded-full">
          T-Shirt
        </div>
        <div className="flex text-[#05613A] flex-row gap-1">
          <div className="border p-1 rounded-lg">
            <TLAddToCart />
          </div>
          <div className="border p-1 rounded-lg">
            <TLHeartIcon />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold max-w-md">
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h2>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-1">
          <h6 className="font-medium text-xl">$600</h6>
          <h6 className="text-sm text-[#8A8A8A] line-through">$630</h6>
        </div>
        <p className="text-[#333333] text-sm">
          This price is exclusive of taxes.
        </p>
      </div>
      <hr className="w-full" />
      <div className="flex mt-3 w-full flex-col">
        <div className="group w-full  relative">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Type
          </label>

          <SelectMenu01 />
        </div>
      </div>
      <div className="flex mt-3 w-full flex-col">
        <div className="group w-full  relative">
          <label
            htmlFor={"10"}
            className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
          >
            Size
          </label>

          <SelectMenu01 />
        </div>
      </div>

      <div className="flex gap-y-2 flex-col">
        <h6>Colors</h6>
        <RadioGroup className="flex flex-row gap-3" defaultValue="2">
          <div className="flex flex-row justify-between items-center">
            <label className="bg-[#F4F7F9] size-10 rounded-full z-10 has-data-[state=checked]:border-[black] border border-transparent has-data-[state=checked]:border  has-data-[state=checked]:scale-105  has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer gap-3 p-2 text-center shadow-xs outline-none has-focus-visible:ring-[3px] transition-all duration-300 ease-in-out">
              <div className="rounded-full bg-red-500 w-[50%] h-[50%] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center m-auto"></div>
              <RadioGroupItem id={`1`} value="1" className="sr-only" />
            </label>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="bg-[#F4F7F9] size-10 rounded-full z-10 has-data-[state=checked]:border-[black] border border-transparent has-data-[state=checked]:border  has-data-[state=checked]:scale-105  has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer gap-3 p-2 text-center shadow-xs outline-none has-focus-visible:ring-[3px] transition-all duration-300 ease-in-out">
              <div className="rounded-full bg-blue-500 w-[50%] h-[50%] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center m-auto"></div>
              <RadioGroupItem id={`2`} value="2" className="sr-only" />
            </label>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="bg-[#F4F7F9] size-10 rounded-full z-10 has-data-[state=checked]:border-[black] border border-transparent has-data-[state=checked]:border  has-data-[state=checked]:scale-105  has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer gap-3 p-2 text-center shadow-xs outline-none has-focus-visible:ring-[3px] transition-all duration-300 ease-in-out">
              <div className="rounded-full bg-green-600 w-[50%] h-[50%] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center m-auto"></div>
              <RadioGroupItem id={`3`} value="3" className="sr-only" />
            </label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <h3 className="text-xl font-semibold">Quantity</h3>
          <span>($300.00 for Piece)</span>
        </div>
        <div className="flex gap-y-4 w-full items-center md:flex-row flex-col justify-center md:justify-between">
          <div className="flex gap-3 md:flex-row items-center justify-start w-full">
            <Stepper02 />
            <span>$300.00</span>
          </div>
          <Button className="bg-[#404040] hover:shadow-lg transition-all md:w-[200px] w-full py-6 cursor-pointer hover:bg-[#333333]">
            {t("add to cart")} <TLShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSideInfo;
