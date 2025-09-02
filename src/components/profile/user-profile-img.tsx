import { userImg } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Input } from "../ui/input";

const UserProfileImg = () => {
  const t = useTranslations();
  return (
    <div className="user-photo">
      <div className="flex flex-row items-center gap-3">
        <div className="relative size-24 rounded-full">
          <Image src={userImg} alt="user-photo" className="rounded-full" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold">{t("Profile Photo")}</h3>
          <p className="text-[#8A8A8A] text-sm">
            {t("Upload Your Photo For Better Reach")}
          </p>

          <label className="text-main-black border text-sm h-10 px-5 font-medium w-fit rounded-4xl cursor-pointer inline-flex items-center">
            {t("Upload")}
            <Input type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserProfileImg;
