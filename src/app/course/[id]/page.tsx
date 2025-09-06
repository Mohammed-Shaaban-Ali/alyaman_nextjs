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
import { Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const course = await courseService.getSingleCourse(parseInt(id));
  if (!course.data) return notFound();
  const t = await getTranslations();
  const getPrice = (course: ICourse) => {
    if (course.price_type === "fixed") return `${course.price} ${t("AED")}`;
    if (course.price_type === "monthly")
      return `${course.price} ${t("aed per month")}`;
    if (course.price_type === "per_level") return t("Depends on the level");
    return "-";
  };
  return (
    <AppContainer className=" mt-8 mx-auto py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/courses">{t("Courses")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{course.data.course_data.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col col-span-2">
          <Card className=" h-fit pt-0">
            <CardHeader className="p-0">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src={course.data.course_data.image}
                  alt={course.data.course_data.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 capitalize">
                  {course.data.course_data.course_type_trans}
                </span>
              </div>
              <h1 className="font-bold text-2xl">
                {course.data.course_data.name}
              </h1>
              <p className="text-base text-gray-700 whitespace-pre-line">
                {course.data.course_data.description}
              </p>
              <div className="pt-2 font-bold text-main-yellow text-lg">
                {getPrice(course.data.course_data)}
              </div>
            </CardContent>
          </Card>
          <div className="mt-3">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg mb-2">
                {t("Instructor Details")}
              </h3>
              <div className="flex gap-4 items-start">
                <Avatar className="size-20">
                  <AvatarImage src={course.data.course_data.teacher.image} />
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-semibold">
                    {course.data.course_data.teacher.name}
                  </div>
                  <p className="text-sm text-gray-600">
                    {course.data.course_data.teacher.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:col-span-1 col-span-2">
          <Card className="lg:max-w-2xl w-full pt-0 gap-0 col-span-1">
            <CardHeader className="pt-6 pb-0 mb-0">
              <h2 className="font-bold text-2xl">{t("Course Content")}</h2>
            </CardHeader>
            <CardContent className="flex pt-0 mt-0 flex-col gap-4 px-6">
              <Accordion type="multiple">
                {course.data.levels.map((level) => (
                  <AccordionItem value={level.name} key={level.id}>
                    <AccordionTrigger>{level.name}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4">
                        {level.lectures.map((lecture) => (
                          <li key={lecture.id}>
                            <div className="flex items-center justify-between">
                              <div className="font-semibold">
                                {lecture.name}
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              {lecture.lecture_type_trans}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          <div className="space-y-6 mt-3">
            {/* <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg mb-2">
                {t("What You'll Learn")}
              </h3>
              <ul className="text-base text-muted-foreground space-y-1">
                <li>• Modern React patterns and best practices</li>
                <li>• Next.js App Router and server components</li>
                <li>• TypeScript for type-safe development</li>
                <li>• Production deployment strategies</li>
              </ul>
            </div> */}

            {/* <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg mb-2">Course Details</h3>
              <div className="text-base text-muted-foreground space-y-1">
                <div>Duration: 17.5 hours</div>
                <div>Level: Beginner to Advanced</div>
                <div>Certificate: Yes</div>
                <div>Lifetime Access: Included</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Page;
