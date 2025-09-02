import { Button } from "../ui/button";
import FeatureCard from "./feature-card";
import HotelCard from "./hotel-card";

const OurFeatureSection = () => {
  return (
    <div className="md:px-8 px-4 mt-12 relative max-w-screen">
      <div className="flex flex-col gap-y-4 justify-between items-center ">
        <div className="flex mb-12 justify-center items-center flex-col gap-y-2">
          <h1 className="text-4xl max-w-lg leading-14 text-center font-medium">
            Our Feature
          </h1>
          <p className="text-sm max-w-xl text-center">
            From powerful search filters to instant confirmations, our platform
            is built to make finding and booking your perfect stay fast, easy,
            and stress-free. Discover the tools that help you travel better.
          </p>
        </div>
        <div className="grid mt-8 mb-4 lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default OurFeatureSection;
