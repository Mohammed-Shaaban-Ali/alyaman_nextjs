import React from "react";
import TLStarFill from "../icons/tl-star-fill";
import TLStar from "../icons/tl-star";

const SingleUserReview = () => {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.min(Math.max(100, 0), 3);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="text-base font-semibold">Alex Daewn</h3>
          <div className="stars flex flex-row gap-1 items-center">
            {[...Array(5)].map((_, index) =>
              index < normalizedRating ? (
                <TLStarFill key={index} />
              ) : (
                <TLStar key={index} className="text-[#404040]" />
              )
            )}
          </div>
        </div>
        <span className="text-[#545454] text-sm">4 months ago</span>
      </div>
      <p className="font-normal text-sm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed
      </p>
    </div>
  );
};

export default SingleUserReview;
