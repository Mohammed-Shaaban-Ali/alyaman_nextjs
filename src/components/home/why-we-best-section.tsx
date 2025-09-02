import { doctorNurseTeam, weAreBestBG } from "@/assets";
import Image from "next/image";
import { TimelineProgress07 } from "../ui/timeline-progress-07";

const WhyWeBestSection = () => {
  return (
    <div className="md:px-8 px-4 mt-20 relative max-w-screen">
      <div className="flex relative flex-col items-center justify-center pt-12 overflow-hidden bg-[#F4F7F9] rounded-3xl">
        <Image
          src={weAreBestBG}
          alt="weAreBestBG"
          className="absolute inset-0 object-cover w-full h-full "
        />
        <h2 className="text-3xl font-semibold mb-2 text-center ">
          Why We Are <span className="text-main">the Best</span>
        </h2>
        <p className="text-sm mt-4 max-w-2xl  text-center">
          Our clinic began with a deep belief: that healthcare should be
          personal, compassionate, and centered around real human connection.
          Today, we proudly continue
        </p>
        <div className="lg:mt-8 mt-4  grid lg:grid-cols-2 flex-row gap-x-8 justify-center items-center">
          <div className="relative lg:mb-0 mb-4 w-full m-auto max-w-[500px] lg:h-full h-[400px] size-full">
            <Image
              fill
              src={doctorNurseTeam}
              alt="doctorNurseTeam"
              className="absolute inset-0 object-contain ltr:object-bottom-right rtl:object-bottom-left  w-full h-full "
            />
          </div>
          <div className="flex px-4 flex-col mb-8 flex-1">
            <h3 className="text-lg mb-4 font-semibold lg:text-start text-center">
              Always open to innovation in healthcare.
            </h3>
            <TimelineProgress07
              value={0}
              steps={[
                {
                  title: "Expert Care You Can Rely On 🏆",
                  description:
                    "Our team is made up of highly qualified doctors and specialists who bring years of real-world experience to every case. You're not just in safe hands — you're in expert ones.",
                },
                {
                  title: "Patient-Centered, Always 💬",
                  description:
                    "We listen before we treat. Every decision we make is based on what's best for you — your comfort, your lifestyle, and your long-term health.",
                },
                {
                  title: "Smart Systems. Seamless Experience ⚙️",
                  description:
                    "From easy online bookings to smooth clinic visits, we've built a system designed around your convenience. Because great care shouldn't come with extra stress.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeBestSection;
