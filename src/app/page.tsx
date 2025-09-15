import HomeMarquee from "@/components/home-marquee";
import AboutUsSection from "@/components/home/about-us-section";
import AdsSection from "@/components/home/ads-section";
import BestServices from "@/components/home/best-services";
import Hero from "@/components/home/hero";
import HomeSlider from "@/components/home/home-slider";
import JobApplyAd from "@/components/home/job-apply-ad";
import OurPosts from "@/components/home/our-posts";
import PartnersSection from "@/components/home/partners-section";
import { TestimonialsSimple } from "@/components/home/user-reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdsSection />
      <AboutUsSection />
      <BestServices />
      <HomeSlider />
      <PartnersSection />
      <TestimonialsSimple />
      <OurPosts />
      <JobApplyAd />
    </div>
  );
}
