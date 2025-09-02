import { useTranslations } from "next-intl";

const PaymentSummary = () => {
  const t = useTranslations();
  return (
    <div className="">
      <p className="text-xl font-semibold">{t("Payment Summary")}</p>
      <div className="mt-4 flex flex-col gap-3 font-medium text-sm md:text-base">
        <div className="flex items-center justify-between ">
          <p className="text-[#545454]">{t("Number Of Items")}</p>
          <p>{"4 " + t("items")}</p>
        </div>

        <div className="flex items-center justify-between ">
          <p className="text-[#545454]">{t("Order Price")}</p>
          <p>
            {400} {t("AED")}
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454]">{t("Delivery")}</p>
          <p>
            {100} {t("AED")}
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454]">{t("Total Order")}</p>
          <p>
            {500} {t("AED")}
          </p>
        </div>
      </div>
      <div className="mt-5 pt-5 flex font-medium flex-col gap-3 border-t border-color">
        <span className="font-semibold text-xl">{t("Address Summary")}</span>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454] font-medium">{t("phone")}</p>
          <p>01125080996</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454] font-medium">{t("country")}</p>
          <p>Egypt</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454] font-medium">{t("city")}</p>
          <p>Cairo</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#545454] font-medium">{t("Address")}</p>
          <p>22Bader - alam Street - 321</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
