import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import AppContainer from "../AppContainer";
import TLLogoIcon from "../icons/tl-logo-icon";
import ProductCard from "../single-product/product-card";

const TopSellerProducts = () => {
  const arr = new Array(8).fill("");
  const t = useTranslations();
  return (
    <div className="flex flex-col my-24 gap-5">
      <AppContainer>
        <div className="flex flex-row justify-between items-center">
          <div className="relative">
            <h2 className="md:text-xl text-lg font-semibold">
              {t("Our Top Seller Products")}
            </h2>
            <div className="w-10 h-1 rounded-full bg-[#404040]"></div>
            <div className="absolute bottom-0">
              <TLLogoIcon />
            </div>
          </div>
          <Link
            href={"/"}
            className="text-[#05613A] group peer flex flex-row gap-2 items-center cursor-pointer text-sm"
          >
            {t("View All Items")}{" "}
            <ArrowRight
              className="rtl:rotate-180 transition-transform duration-300 rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2"
              size={18}
            />
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-5 w-auto  mt-12 sm:grid-cols-2 grid-cols-2">
          {arr.map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </AppContainer>
    </div>
  );
};

export default TopSellerProducts;
