"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import AppContainer from "@/components/AppContainer";
import TLLogoIcon from "@/components/icons/tl-logo-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "use-intl";
import LanguageSelectMenu from "./language-select-menu";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import { logo, newLogo } from "@/assets";

const Navbar = () => {
  const leftItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "#about-us",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Courses",
      href: "/courses",
    },
    {
      title: "Instructors",
      href: "/instructors",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];

  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <header className="lg:bg-white bg-transparent  shadow-xs top-0 z-40 w-full transition-all duration-500">
      <AppContainer className="">
        <div className="  flex flex-row justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="me-4 items-center flex">
              <Link href="/" className="me-6 flex items-center space-x-2">
                <div className="relative sm:w-16 w-12 h-full ">
                  {/* <Image src={logo} alt="logo" className=" inset-0 " /> */}
                  <Image src={newLogo} alt="logo" className=" inset-0 " />
                </div>
              </Link>
            </div>
            {/* Desktop nav (left items) */}
            <nav className="hidden lg:flex text-center items-center">
              <ul className="flex space-x-3 items-center">
                {leftItems.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      " rounded-lg py-2 px-4 relative",
                      pathname.includes(item.href)
                        ? "text-[#404040] rounded-full  duration-300"
                        : "text-[#020202] hover:text-[#020202]"
                    )}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "ltr:text-xl rtl:text-base text-[#020202] flex flex-row gap-1 items-center transition-all duration-300 font-medium  relative"
                      )}
                    >
                      <span
                        className={cn(
                          "relative transition-all duration-300",
                          pathname === item.href && ""
                        )}
                      >
                        {t(item.title)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Desktop nav (right items) */}
          <div className=" hidden lg:flex items-center gap-x-4">
            <LanguageSelectMenu />
            <Link href={process.env.NEXT_PUBLIC_API_BASE_URL || "/"}>
              <Button className="bg-main cursor-pointer text-lg hover:bg-main/80 duration-300">
                {t("Login")}
              </Button>
            </Link>
          </div>

          {/* Mobile nav */}
          <MobileNav leftItems={leftItems} />
        </div>
      </AppContainer>
    </header>
  );
};

export default Navbar;
