import { calendarFeatureIcon } from "@/assets";
import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="flex relative rounded-3xl bg-[rgba(244,247,249,1)] flex-col gap-y-4 p-6">
      <div className="relative bg-white  w-20 flex justify-center items-center p-4   overflow-hidden rounded-xl">
        <div className="relative ">
          <Image
            src={calendarFeatureIcon}
            alt="feature"
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-white absolute top-8 end-8 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-6xl opacity-10">
        Easy
      </p>
      <h3 className="text-xl font-semibold ">Easy Booking Process</h3>
      <p>
        No more complicated steps or confusing forms. Our platform lets you
        search, choose, and book your stay in just a few clicks — all in one
        smooth flow.
      </p>
    </div>
  );
};

export default FeatureCard;
