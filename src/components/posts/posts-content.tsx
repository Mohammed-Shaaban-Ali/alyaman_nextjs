"use client";
import { emptyCategories } from "@/assets";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import postService from "@/services/post";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

import PostCard from "./post-card";
const PostsContent = () => {
  const t = useTranslations();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAllPosts(),
  });
  return (
    <>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("Posts")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr />
      {!isLoading && data?.data.length === 0 && (
        <div className="flex py-32 justify-center gap-y-6 flex-col items-center">
          <div className="relative size-32">
            <Image
              src={emptyCategories}
              alt="NoCategories"
              className="absolute inset-0 object-cover"
            />
          </div>
          <p className="text-center max-w-xs md:text-base text-sm">
            {t("There are no Courses yet")}
          </p>
        </div>
      )}
      {isLoading && (
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-80 w-full" />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.data.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
export default PostsContent;
