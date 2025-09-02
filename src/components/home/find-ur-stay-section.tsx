import { Button } from "../ui/button";
import HotelCard from "./hotel-card";

const FindYourStaySection = () => {
  return (
    <div className="md:px-8 px-4 mt-12 relative max-w-screen">
      <div className="flex flex-col gap-y-4 justify-between items-center ">
        <div className="flex mb-12 justify-center items-center flex-col gap-y-2">
          <h1 className="text-4xl max-w-lg leading-14 text-center font-medium">
            Find Your Stay
          </h1>
          <p className="text-sm max-w-xl text-center">
            Discover rooms tailored to your comfort — with real reviews, clear
            photos, and easy booking.
          </p>
        </div>
        <div className="grid mt-8 mb-4 lg:grid-cols-4 gap-y-8 gap-x-4 md:grid-cols-2 grid-cols-1">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
        <Button className="group/button h-12 px-8 relative overflow-hidden rounded-xl border border-main bg-white cursor-pointer py-1 text-sm font-medium text-main transition-all duration-150 hover:bg-transparent hover:border-main active:scale-95">
          <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-main to-main/70 transition-all duration-500 group-hover/button:h-full" />
          <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
            See All
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FindYourStaySection;
