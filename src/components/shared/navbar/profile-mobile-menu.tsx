import AppContainer from "@/components/AppContainer";
import TLLocation from "@/components/icons/tl-location-icon";
import TLOrders from "@/components/icons/tl-orders-icon";
import TLSettings from "@/components/icons/tl-settings-icon";
import TLUser from "@/components/icons/tl-user-icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
const ProfileMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="border-none flex flex-row justify-between w-full cursor-pointer">
        <div className="flex items-center  w-full flex-row gap-1">
          <TLUser /> {t("Profile")}
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="rtl:rotate-180">
            <ChevronRight />
          </span>
        </div>
        {/* <span className="sr-only">Toggle menu</span> */}
      </SheetTrigger>
      <SheetContent side="right" className="h-screen w-screen px-0">
        <SheetHeader className="px-0">
          <AppContainer>
            <SheetTitle
              asChild
              className="flex mb-4  flex-row items-center gap-2 "
            >
              <h1
                className="cursor-pointer w-fit"
                onClick={() => setOpen(false)}
              >
                <ChevronLeft className="rtl:rotate-180" size={20} />{" "}
                {t("Profile")}
              </h1>
            </SheetTitle>
            <SheetDescription asChild>
              <hr />
            </SheetDescription>
          </AppContainer>
        </SheetHeader>
        <AppContainer className="flex flex-col gap-5">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="item flex text-[#8A8A8A] flex-row gap-2"
          >
            <TLSettings />
            {t("General Settings")}
          </Link>
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="item flex text-[#8A8A8A] flex-row gap-2"
          >
            <TLLocation />
            {t("My Addresses")}
          </Link>
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="item flex text-[#8A8A8A] flex-row gap-2"
          >
            <TLOrders />
            {t("Orders History")}
          </Link>
        </AppContainer>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileMobileMenu;
