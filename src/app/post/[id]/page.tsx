import { postDetails } from "@/assets";
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
import postService from "@/services/post";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const data = await postService.getSinglePost(parseInt(id));

  if (!data.data) return {};

  return {
    description: data.data.meta_description,
    title: data.data.title + "|" + "Alyaman Platform",
    openGraph: {
      title: data.data.title,
      description: data.data.meta_description,
      images: [data.data.image],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const t = await getTranslations();
  const post = await postService.getSinglePost(parseInt(id));
  if (!post.data) return notFound();

  return (
    <div>
      <AppContainer className="mt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/posts">{t("Posts")}</BreadcrumbLink>
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
          <article className="space-y-6">
            <div className="w-full aspect-video overflow-hidden rounded-xl">
              <Image
                src={post.data.image}
                alt={post.data.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl font-semibold">{post.data.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.data.content }}></p>
          </article>
        </div>
        <OurPosts />
      </AppContainer>
    </div>
  );
};

export default Page;
