import { IPost } from "@/utils/types";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import TLArrowRight from "../right-arrow";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
const PostCard = ({ post }: { post: IPost }) => {
  const t = useTranslations();
  return (
    <Card
      key={post.id}
      className="gap-3 pt-0 rounded-2xl mx-auto max-w-md h-full"
    >
      <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
        <Image
          src={post.image}
          alt="course"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <Link
          href={`/post/${post.id}`}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <Button className="bg-transparent border border-white text-white cursor-pointer px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-100 hover:text-black transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-sm sm:text-base">
            {t("View Details")}
          </Button>
        </Link>
      </div>
      <CardContent className="flex px-3 sm:px-4 mt-1 pb-4 flex-col">
        <Link href={`/post/${post.id}`}>
          <h3 className="font-semibold text-lg sm:text-xl leading-tight">
            {post.title}
          </h3>
          <div className="flex gap-2 mt-2 flex-row items-end">
            <p className="text-[#545454] text-sm sm:text-base leading-relaxed flex-1">
              {post.short_description}
            </p>
            <div className="size-8 sm:size-10 border hover:bg-black hover:text-white duration-300 transition-all cursor-pointer border-black rounded-full aspect-square flex justify-center items-center flex-shrink-0">
              <TLArrowRight
                size={20}
                className="sm:w-6 rtl:rotate-180 ltr:rotate-0 sm:h-6"
              />
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;
