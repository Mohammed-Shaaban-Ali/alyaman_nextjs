"use client";
import { aboutUsImg01, postDetails } from "@/assets";
import AppContainer from "@/components/AppContainer";
import OurPosts from "@/components/home/our-posts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <AppContainer className="mt-32">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("Post Details")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AppContainer>
      <AppContainer>
        <div className="w-full mx-auto min-h-64 pt-12  pb-12">
          <article className="    space-y-6">
            <div className="w-full  overflow-hidden rounded-xl">
              <Image
                src={postDetails}
                alt={"data.data.title"}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-semibold">
              Explore Our Articles: Your Gateway to Knowledge
            </h1>
            <p>
              Welcome to a rich and expansive world of knowledge, where every
              article is a step toward deeper understanding and meaningful
              growth. Our platform is dedicated to delivering content that
              resonates with your curiosity, empowering you with insights across
              a variety of fields such as technology, health, lifestyle,
              education, self-improvement, and more. Each article is carefully
              crafted to provide value, combining fresh ideas with practical
              advice to ensure that your journey through our content is both
              enjoyable and enlightening. Whether you&apos;re an avid learner
              looking to expand your knowledge base, a professional aiming to
              stay ahead in your field, or someone seeking inspiration for
              personal growth, this is the perfect space to begin your
              exploration. Our goal is to help you make informed decisions,
              embrace creativity, and achieve your aspirations by equipping you
              with the tools and perspectives that matter. With a focus on
              clarity and depth, our articles break down complex ideas into
              easily digestible insights, making knowledge accessible to
              everyone. As you dive into our library of content, you&apos;ll
              find engaging stories, thought-provoking analysis, and actionable
              takeaways tailored to fuel your passion for learning. From
              understanding the latest innovations to rediscovering timeless
              wisdom, our articles are here to guide you every step of the way.
              Let this be more than just a reading experience; let it be a
              journey of discovery and empowerment. Explore our collection and
              uncover the endless possibilities that await you. Your next big
              idea, breakthrough, or life-changing inspiration might just be a
              click away. Start now, and let curiosity lead you to new horizons!
            </p>
          </article>
        </div>
        <OurPosts />
      </AppContainer>
    </div>
  );
};

export default Page;
