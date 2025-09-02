"use client";
import { useTranslations } from "next-intl";
import React from "react";
import AddNewPaymentAddressDialog from "../shared/add-new-address-dialog";
import ChangeAddressDialog from "./change-address-dialog";

const PaymentAddress = () => {
  const t = useTranslations();
  const [openNewAddress, setOpenNewAddress] = React.useState(false);
  return (
    <div className="mt-5 pt-5 border-t border-b pb-5 border-color">
      <div className="">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-lg">{t("Address")}</span>
          <ChangeAddressDialog setOpenNewAddress={setOpenNewAddress} />
          <AddNewPaymentAddressDialog
            setOpenNewAddress={setOpenNewAddress}
            openNewAddress={openNewAddress}
          />
        </div>
        <span className="font-medium block mt-[6px]">
          {"21 Badr Street, Cairo, Egypt"}
        </span>
      </div>
    </div>
  );
};

export default PaymentAddress;
