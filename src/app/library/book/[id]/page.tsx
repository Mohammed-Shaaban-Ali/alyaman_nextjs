import * as assets from "@/assets";
import AppContainer from "@/components/AppContainer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import courseService from "@/services/course";
import { ICourse } from "@/utils/types";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";
import libraryService from "@/services/library";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const course = await libraryService.getSingleBook(parseInt(id));
  if (!course.data) return notFound();
  const t = await getTranslations();
  const getPrice = (course: ICourse) => {
    if (course.price_type === "fixed")
      return (
        <>
          <span className="aed-symbol ltr:me-1 rtl:ms-1 ltr:!ml-[-55px]">
            AED
          </span>
          {course.price}
        </>
      );
    if (course.price_type === "monthly")
      // return `${course.price} ${t("aed per month")}`;
      return (
        <>
          <span className="aed-symbol ltr:me-1 rtl:ms-1">AED</span>
          {course.price} / {t("monthly")}
        </>
      );
    if (course.price_type === "per_level") return t("Depends on the level");
    return "-";
  };
  return (
    <AppContainer className=" mt-8 mx-auto pt-8 mb-3">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/library">{t("Library")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{course.data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="flex flex-col col-span-2">
          <div className="flex flex-col gap-4 ">
            <div className="relative group">
              <div className="h-96 min-w-96 relative overflow-hidden ">
                <Image
                  src={course.data.image}
                  alt={course.data.title}
                  fill
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* <div className="absolute top-4 left-4">
                  <div className="bg-white/90 text-slate-700 border-0 shadow-md">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {course.data.course_data.course_type_trans}
                  </div>
                </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:col-span-2 col-span-2 p-6">
          <h1 className="font-bold text-4xl">{course.data.title}</h1>
          <p className="text-lg text-gray-700 whitespace-pre-line">
            {course.data.short_description}
          </p>
          <div className="pt-2 font-bold text-main-yellow text-3xl">
            {course.data.price}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Page;
