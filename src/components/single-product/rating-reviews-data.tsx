import { useTranslations } from "next-intl";
import SessionFeedbackDialog from "../dialogs/session-feedback-dialog";
import TLLogoIcon from "../icons/tl-logo-icon";
import TLStarFill from "../icons/tl-star-fill";
import LinearProgress01 from "../ui/linear-progress-01";
import UsersReviews from "./users-reviews";

const RatingReviewsData = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center my-24 gap-5">
      <div className="flex  md:flex-row flex-col justify-between md:items-center items-start">
        <div className="relative">
          <h2 className="md:text-xl text-lg font-semibold">
            {t("Rating & Reviews")}
          </h2>
          <div className="w-10 h-1 rounded-full bg-[#404040]"></div>

          <div className="absolute bottom-0">
            <TLLogoIcon />
          </div>
        </div>
      </div>
      <div className="flex gap-y-8 md:flex-row flex-col items-center justify-between">
        <div className="flex gap-2 flex-row items-end">
          <h1 className="text-8xl font-medium">4,5</h1>
          <p className="text-sm text-[#B0B0B0]">/5</p>
        </div>
        <div className="flex items-center justify-center w-full flex-col gap-y-3">
          <div className="flex flex-row gap-3 items-center w-full justify-center">
            <TLStarFill />
            <span>5</span>
            <LinearProgress01 value={67} />
            <span>67%</span>
          </div>
          <div className="flex flex-row gap-3 items-center w-full justify-center">
            <TLStarFill />
            <span>4</span>
            <LinearProgress01 value={15} />
            <span>15%</span>
          </div>
          <div className="flex flex-row gap-3 items-center w-full justify-center">
            <TLStarFill />
            <span>3</span>
            <LinearProgress01 value={6} />
            <span>6%</span>
          </div>
          <div className="flex flex-row gap-3 items-center w-full justify-center">
            <TLStarFill />
            <span>2</span>
            <LinearProgress01 value={3} />
            <span>3%</span>
          </div>
          <div className="flex flex-row gap-3 items-center w-full justify-center">
            <TLStarFill />
            <span>1</span>
            <LinearProgress01 value={9} />
            <span>9%</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <p>{t("Total Reviews")}</p>
          <h3 className="text-5xl font-semibold">3.0K</h3>
          <SessionFeedbackDialog />
        </div>
      </div>
      <UsersReviews />
    </div>
  );
};

export default RatingReviewsData;
