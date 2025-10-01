"use client";
import { heroBg, heroBg2, logo, newLogo } from "@/assets";
import TLFaceBookLine from "@/components/facebook-line";
import TLInstagramLine from "@/components/instagram-line";
import TLLinkedInLine from "@/components/linkedin-line";
import TLLocationIcon from "@/components/location-icon";
import TLMailIcon from "@/components/mail-icon";
import TLPhoneIcon from "@/components/phone-icon";
import TLTelegramLine from "@/components/telegram-line";
import { Button } from "@/components/ui/button";
import TLWhatsappLine from "@/components/whatsapp-line";

import TLMailLineIcon from "@/components/mail-line-icon";
import TLMessangerLine from "@/components/messanger-line";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TLArrowRight from "../right-arrow";
import Link from "next/link";
import { useHomeData } from "@/contexts/global/home-data";
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});
const FooterStyle12 = () => {
  const t = useTranslations();
  const { appSettings } = useHomeData();
  const locale = useLocale();
  return (
    <footer className="mt-20 relative w-full  h-full ">
      {/* 3 BOXES */}

      {/* 3 BOXES */}
      <Image
        src={heroBg}
        alt="hero"
        className="absolute start-0 top-0 opacity-30 z-10 w-full h-full object-cover "
        priority
      />
      <Image
        src={heroBg2}
        alt="hero2"
        className="absolute object-bottom opacity-30 start-0 top-0 z-[11] w-full h-full object-cover "
        priority
      />
      <div className="z-[15] relative container  mx-auto lg:px-20 px-6 flex-row items-center gap-3 justify-between text-[#020202] lg:p-8 lg:pt-8 pb-6 pt-12 border-b border-input/30 mt-4 font-semibold">
        <div className="grid z-30 grid-cols-2 gap-6 lg:grid-cols-6">
          <div className="  flex gap-y-4 flex-col order-1 col-span-3 max-w-xl">
            {/* <Image src={logo} alt="dummy" width={100} height={36} /> */}
            <Image src={newLogo} alt="dummy" width={100} height={36} />
            {appSettings.general_description && (
              <p className="text-[#333333] font-medium">
                {appSettings.general_description}
              </p>
            )}
          </div>

          <div className="lg:order-2 order-3 col-span-1 lg:col-start-4">
            <h3 className="mb-4 text-[#020202] text-xl font-bold">
              {t("Our Platform")}
            </h3>
            <ul className="space-y-4 text-[#333333]">
              <li className="font-medium ">
                <Link href={"/"}>{t("Home")}</Link>
              </li>

              <li className="font-medium ">
                <Link href={"/services"}>{t("Services")}</Link>
              </li>
              <li className="font-medium ">
                <Link href={"/posts"}>{t("Our Posts")}</Link>
              </li>
              <li className="font-medium ">
                <Link href={"/contact-us"}>{t("Contact Us")}</Link>
              </li>
              <li className="font-medium ">
                <Link href={"/policies"}>{t("Our Policies")}</Link>
              </li>
            </ul>
          </div>
          <div className="lg:order-4 order-3 col-span-1">
            <h3 className="mb-4 text-[#020202] text-xl font-bold">
              {t("Contact Us")}
            </h3>
            <ul className="space-y-4 md:text-base text-sm text-[#333333]">
              {appSettings.communication_mobile && (
                <Link
                  href={`tel:${appSettings.communication_mobile}`}
                  className="flex flex-row gap-2"
                >
                  <TLPhoneIcon className="text-[#333333]" />
                  <li dir="ltr" className="font-medium  ">
                    {appSettings.communication_mobile}
                  </li>
                </Link>
              )}
              {appSettings.communication_email && (
                <Link
                  href={`mailto:${appSettings.communication_email}`}
                  className="flex flex-row gap-2 items-center"
                >
                  <span className="flex-shrink-0">
                    <TLMailIcon className="text-[#333333]" />
                  </span>
                  <li className="font-medium  lg:break-normal break-all">
                    {appSettings.communication_email}
                  </li>
                </Link>
              )}

              {appSettings.communication_address && (
                <Link href={"#"} className="flex flex-row gap-2">
                  <TLLocationIcon className="text-[#333333]" />
                  <li className="font-medium ">
                    {appSettings.communication_address}
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyle12;
