import AppContainer from "@/components/AppContainer";
import LogoutConfirmDialog from "@/components/dialogs/logout-confirm-dialog";
import TLCartIcon from "@/components/icons/tl-cart-icon";
import TLMenuBars from "@/components/icons/tl-menu-bars-icons";
import TLNotificationIcon from "@/components/icons/tl-notification-icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanugageMobileMenu from "./lanuguage-mobile-menu";
import ProfileMobileMenu from "./profile-mobile-menu";
const MobileNav = ({
  leftItems,
}: {
  leftItems: {
    title: string;
    href: string;
  }[];
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, []);
  const t = useTranslations();
  return (
    <div className="flex lg:hidden ltr:ml-auto rtl:mr-auto">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="border-none text-main cursor-pointer">
          <TLMenuBars />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="top" className="h-screen px-0">
          <SheetHeader className="px-0">
            <AppContainer>
              <SheetTitle
                asChild
                className="flex mb-4 flex-row justify-between"
              >
                <h1>{t("Menu")}</h1>
              </SheetTitle>
              <SheetDescription asChild>
                <hr />
              </SheetDescription>
            </AppContainer>
          </SheetHeader>
          <AppContainer className="flex flex-col gap-8">
            {leftItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm flex flex-row gap-1 transition-all duration-300 font-medium  relative",
                  pathname === item.href
                    ? "text-[#404040] "
                    : "text-[#8A8A8A] hover:text-[#404040]"
                )}
              >
                <span
                  className={cn(
                    "relative transition-all duration-300",
                    pathname === item.href
                      ? "text-[#404040] after:content-[''] after:absolute after:start-0 after:bottom-[-3px] after:w-[70%] after:rounded-full after:mx-auto after:h-[2px] after:bg-[#404040]"
                      : "text-[#8A8A8A] hover:text-[#404040]"
                  )}
                >
                  {t(item.title)}
                </span>
              </Link>
            ))}
            <div className="h-px bg-border my-1" />
            <div className=" text-[#8A8A8A] flex flex-col gap-6">
              <LanugageMobileMenu />
              {/* <ProfileMobileMenu /> */}
            </div>

            {/* <div className="fixed bottom-6 left-0 right-0 px-4">
              <LogoutConfirmDialog forMobile={true} />
            </div> */}
          </AppContainer>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
