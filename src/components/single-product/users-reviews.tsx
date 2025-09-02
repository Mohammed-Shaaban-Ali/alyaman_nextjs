import React from "react";
import SingleUserReview from "./single-user-review";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const UsersReviews = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-8 my-8">
      <SingleUserReview />
      <SingleUserReview />
      <SingleUserReview />
      <SingleUserReview />
      <div className="flex justify-center items-center">
        <Button className="bg-[#F5F5F5] hover:scale-105 duration-300 py-5 cursor-pointer hover:bg-[#F5F5F5] text-[#404040]">
          {t("View More Comments")}
        </Button>
      </div>
    </div>
  );
};

export default UsersReviews;
