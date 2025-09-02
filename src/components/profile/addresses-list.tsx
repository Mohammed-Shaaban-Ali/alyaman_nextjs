"use client";
import TLEdit from "@/components/icons/tl-edit-icon";
import DeleteAddressDialog from "@/components/profile/delete-address-dialog";
import UpdateAddressDialog from "@/components/profile/update-address-dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import AddNewAddressDialog from "../shared/add-new-address-dialog";
import Image from "next/image";
import { nothingExist } from "@/assets";
const AddressesList = () => {
  const t = useTranslations();
  const [openUpdateAddress, setOpenUpdateAddress] = React.useState(false);
  const [openAddNewAddress, setOpenAddNewAddress] = React.useState(false);
  const isEmpty = true;
  return (
    <div className="flex flex-col">
      {!isEmpty && (
        <>
          <div className="flex flex-col divide-y">
            <UpdateAddressDialog
              isOpen={openUpdateAddress}
              setIsOpen={setOpenUpdateAddress}
            />
            <AddNewAddressDialog
              openNewAddress={openAddNewAddress}
              setOpenNewAddress={setOpenAddNewAddress}
            />
            <div className="grid grid-cols-1 gap-4 md:grid xl:grid-cols-4 items-center w-full  rounded-xl p-4 ">
              {/* Address Section */}
              <div className="md:flex flex-col md:col-span-1 gap-x-4 md:max-w-48">
                <p className="text-sm text-gray-500 font-medium">
                  {t("Address")}
                </p>
                <p className="text-gray-900 font-medium">
                  22Bader - alam Street - 321
                </p>
              </div>

              <div className="md:flex md:flex-row md:col-span-2 flex w-4/5 flex-row items-center md:gap-14 gap-5">
                {/* Country Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("Country")}
                  </p>
                  <p className="text-gray-900 font-medium">Egypt</p>
                </div>

                {/* City Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("City")}
                  </p>
                  <p className="text-gray-900 font-medium">Cairo</p>
                </div>

                {/* Phone Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("Phone")}
                  </p>
                  <p className="text-gray-900 font-medium">01145080996</p>
                </div>
              </div>
              <hr className="md:hidden" />
              {/* Actions Section */}
              <div className="flex flex-row gap-x-2 col-span-1 justify-end">
                <button
                  onClick={() => setOpenUpdateAddress(true)}
                  type="button"
                  className="flex justify-center cursor-pointer items-center w-8 md:size-10 size-8 rounded-[10px] bg-[#0E38260D]"
                >
                  <TLEdit />
                </button>

                <DeleteAddressDialog />

                {true ? (
                  <Button
                    variant="outline"
                    className="text-main cursor-pointer min-w-28 border-main "
                  >
                    {t("Default")}
                  </Button>
                ) : (
                  <Button className="text-white min-w-28 bg-main hover:bg-main/90 cursor-pointer hover:text-white  ">
                    {t("Set default")}
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid xl:grid-cols-4 items-center w-full  rounded-xl p-4 ">
              {/* Address Section */}
              <div className="md:flex flex-col md:col-span-1 gap-x-4 md:max-w-48">
                <p className="text-sm text-gray-500 font-medium">
                  {t("Address")}
                </p>
                <p className="text-gray-900 font-medium">
                  22Bader - alam Street - 321
                </p>
              </div>

              <div className="md:flex md:flex-row md:col-span-2 flex w-4/5 flex-row items-center md:gap-14 gap-5">
                {/* Country Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("Country")}
                  </p>
                  <p className="text-gray-900 font-medium">Egypt</p>
                </div>

                {/* City Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("City")}
                  </p>
                  <p className="text-gray-900 font-medium">Cairo</p>
                </div>

                {/* Phone Section */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 font-medium">
                    {t("Phone")}
                  </p>
                  <p className="text-gray-900 font-medium">01145080996</p>
                </div>
              </div>
              <hr className="md:hidden" />
              {/* Actions Section */}
              <div className="flex flex-row gap-x-2 col-span-1 justify-end">
                <button
                  onClick={() => setOpenUpdateAddress(true)}
                  type="button"
                  className="flex justify-center cursor-pointer items-center w-8 md:size-10 size-8 rounded-[10px] bg-[#0E38260D]"
                >
                  <TLEdit />
                </button>

                <DeleteAddressDialog />

                {true ? (
                  <Button
                    variant="outline"
                    className="text-main cursor-pointer min-w-28 border-main "
                  >
                    {t("Default")}
                  </Button>
                ) : (
                  <Button className="text-white min-w-28 bg-main hover:bg-main/90 cursor-pointer hover:text-white  ">
                    {t("Set default")}
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="add-address mt-6 gap-2 flex justify-center items-center">
            <div
              onClick={() => setOpenAddNewAddress(true)}
              className="cursor-pointer justify-center flex"
            >
              <Plus />
              <h3> {t("Add New Address")}</h3>
            </div>
          </div>
        </>
      )}
      {isEmpty && (
        <div className="flex mb-6 py-20 justify-center gap-y-4 flex-col items-center">
          <div className="relative size-20">
            <Image src={nothingExist} alt="no-addresses" className="absolute" />
          </div>
          <p>{t("There is no addresses right now")}</p>
          <div className="add-address gap-2 flex justify-center items-center">
            <div
              onClick={() => setOpenAddNewAddress(true)}
              className="cursor-pointer font-medium justify-center flex"
            >
              <Plus />
              <h3> {t("Add New Address")}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressesList;
