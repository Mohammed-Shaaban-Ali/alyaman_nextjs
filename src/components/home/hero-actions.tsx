import Link from "next/link";
import TLFacebook from "../icons/tl-facebook-icon";
import TLinstagram from "../icons/tl-instagram-icon";
import TLLinkedIn from "../icons/tl-linkedin-icon";
import TLTelegram from "../icons/tl-telegram-icon";
import TLWhatsapp from "../icons/tl-whatsapp-icon";
import { Button } from "../ui/button";

const HeroActions = () => {
  return (
    <div className="flex lg:flex-row lg:justify-start justify-center flex-col relative mt-6 items-center lg:space-x-7">
      <Button className="bg-[#404040] peer py-6 w-40 rounded-xl cursor-pointer hover:bg-[#363636] group">
        Shop Now{" "}
      </Button>
      <div className="bg-[#05613A] w-24 h-1 lg:block hidden rounded-full"></div>
      <div className="bg-[#05613A] w-1 h-8 lg:hidden block my-3 rounded-full"></div>
      <div className="flex flex-row gap-2 ">
        <Link
          href={"/"}
          className="bg-white hover:shadow-sm transition-all duration-300 flex z-30 rounded-full justify-center items-center size-10"
        >
          <TLinstagram size="20" />
        </Link>
        <Link
          href={"/"}
          className="bg-white flex z-30 hover:shadow-sm transition-all duration-300 rounded-full justify-center items-center size-10"
        >
          <TLFacebook size="20" />
        </Link>
        <Link
          href={"/"}
          className="bg-white flex z-30 hover:shadow-sm transition-all duration-300 rounded-full justify-center items-center size-10"
        >
          <TLLinkedIn size="20" />
        </Link>
        <Link
          href={"/"}
          className="bg-white flex z-30 hover:shadow-sm transition-all duration-300 rounded-full justify-center items-center size-10"
        >
          <TLTelegram size="20" />
        </Link>
        <Link
          href={"/"}
          className="bg-white flex z-30 hover:shadow-sm transition-all duration-300 rounded-full justify-center items-center size-10"
        >
          <TLWhatsapp size="20" />
        </Link>
      </div>
    </div>
  );
};

export default HeroActions;
