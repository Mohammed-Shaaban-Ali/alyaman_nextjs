import React from "react";
import PaginationLinks01 from "../ui/pagination-links-01";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import TLArrowRight from "../right-arrow";

const OrdersHistoryList = () => {
  const t = useTranslations();
  const isEmpty = false;
  return (
    <div>
      {/* mobile */}
      <div className=" flex md:hidden flex-col gap-3">
        <h1 className="text-xl font-semibold">{t("Order History")}</h1>
        {isEmpty && (
          <div className="flex justify-center items-center">
            <p className="text-[#545454] max-w-sm text-center h-32 py-12 font-medium md:text-base text-sm">
              {t(
                "You have not placed any orders yet Start exploring and place your first order"
              )}
            </p>
          </div>
        )}
        {!isEmpty && (
          <>
            <Link
              href={`/profile/order-history/1`}
              className="rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-3 p-4 items-center gap-2">
                <div className="flex flex-col">
                  <div className="text-[#8A8A8A] text-xs font-normal mb-1">
                    {t("order number")}
                  </div>
                  <div className="font-medium text-gray-800 underline">
                    #484567
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#8A8A8A] text-xs font-normal mb-1">
                    {t("the quantity")}
                  </div>
                  <div className="font-medium text-gray-800">5</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#8A8A8A] text-xs font-normal mb-1">
                    {t("Total price")}
                  </div>
                  <div className="font-medium text-gray-800">
                    400 {t("AED")}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 p-4 ">
                <div className="">
                  <div className="text-[#8A8A8A] text-xs font-normal mb-1">
                    {t("the date")}
                  </div>
                  <div className="font-medium text-gray-800">24-4-2025</div>
                </div>

                <div>
                  <div className="text-[#8A8A8A] text-xs font-normal mb-1">
                    {t("order status")}
                  </div>
                  <div className="font-medium text-gray-800">
                    <p className={cn("text-sm capitalize", "order-completed")}>
                      {"Completed"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full p-4">
                <div className="bg-gray-100 group flex flex-row justify-center items-center gap-x-2 rounded-lg w-full px-3 text-center py-2 text-sm text-gray-700 font-medium hover:bg-gray-200 transition-colors">
                  <span className="underline">{t("View Details")}</span>
                  <TLArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </Link>
            <div className="mt-6 flex justify-center items-center m-auto">
              <PaginationLinks01
                currentPage={1}
                totalPages={4}
                paginationItemsToDisplay={4}
              />
            </div>
          </>
        )}
      </div>

      {/* web */}
      <div className=" hidden md:block mt-6">
        <div className="py-2 lg:py-4 px-4 lg:px-4 rounded-[12px] bg-[#F4F7F9] text-main-black text-center font-medium text-sm lg:text-sm items-center flex">
          <div className="w-1/5">{t("order-id")}</div>
          <div className="w-1/5">{t("the date")}</div>
          <div className="w-1/5">{t("the quantity")}</div>
          <div className="w-1/5">{t("Total price")}</div>
          <div className="w-1/5">{t("order status")}</div>
          <div className="w-1/5"></div>
        </div>
        {isEmpty && (
          <div className="flex justify-center items-center">
            <p className="text-[#545454] max-w-sm text-center h-32 py-12 font-medium md:text-base text-sm">
              {t(
                "You have not placed any orders yet Start exploring and place your first order"
              )}
            </p>
          </div>
        )}
        {!isEmpty && (
          <>
            <div className="flex flex-col text-sm">
              <Link
                href={`/profile/order-history/1`}
                className="text-center font-medium text-sm lg:text-base items-center flex p-4 border-b transition hover:bg-[#F5F5F5]"
              >
                <div className="w-1/5 text-yellow">#{"3197398"}</div>
                <div className="w-1/5">24-4-2025</div>
                <div className="w-1/5">5 Items</div>
                <div className="w-1/5">{400 + " " + t("AED")}</div>
                <div className="w-1/5 ">
                  <p className={cn("text-sm capitalize", "order-completed")}>
                    {"Completed"}
                  </p>
                </div>
                <div className="w-1/5 underline group flex flex-row gap-2">
                  <span>{t("View Details")}</span>
                  <TLArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <PaginationLinks01
                currentPage={1}
                totalPages={4}
                paginationItemsToDisplay={4}
              />
            </div>
          </>
        )}
      </div>
      {/* Empty Orders */}
      {/*  */}
    </div>
  );
};

export default OrdersHistoryList;
