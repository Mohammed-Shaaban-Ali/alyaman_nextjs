import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useHomeData } from "@/contexts/global/home-data";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import TLPlayCircle from "../icons/tl-play-circle";

const HeroVideoDialog = () => {
  const { homeData } = useHomeData();
  const t = useTranslations();
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group text-main gap-2 flex items-center  w-fit bg-transparent text-main-yellow  cursor-pointer  overflow-hidden z-10 relative transition-all duration-300">
          <TLPlayCircle
            className="text-main me-1 size-12 rtl:rotate-180 ltr:rotate-0 transition-transform duration-700 ltr:group-hover:rotate-[360deg] rtl:group-hover:rotate-[-360deg]"
            aria-hidden="true"
          />
          <span className="text-2xl font-semibold">{t("Watch Video")}</span>
        </div>
      </DialogTrigger>

      <DialogContent className="md:max-w-2xl sm:max-w-sm max-w-sm max-[400px]:max-w-xs w-full p-0 border-none flex flex-col items-center">
        <DialogHeader className="mt-8">
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="w-full aspect-video max-w-2xl rounded-lg overflow-hidden bg-black">
          <iframe
            src={homeData.hero_section.hero_section_video_link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full min-h-[200px]"
            style={{ border: 0 }}
          />
        </div>
        {/* <DialogClose asChild className="mb-6">
          <button className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-medium">
            Close
          </button>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default HeroVideoDialog;
