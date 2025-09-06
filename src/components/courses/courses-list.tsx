import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ICourse } from "@/utils/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CoursesList = ({ courses }: { courses: ICourse[] | undefined }) => {
  const t = useTranslations();
  const getPrice = (course: ICourse) => {
    if (course.price_type === "fixed")
      return (
        <>
          <span className="aed-symbol ltr:me-1 rtl:ms-1">AED</span>
          {course.price}
        </>
      );
    if (course.price_type === "monthly")
      return `${course.price} ${t("aed per month")}`;
    if (course.price_type === "per_level") return t("Depends on the level");
    return "-";
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses?.map((course) => (
          <Card key={course.id} className="h-full pt-0 pb-0 flex flex-col">
            <CardHeader className="p-0">
              <Link href={`/course/${course.id}`}>
                <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-2 px-4">
              <Link href={`/course/${course.id}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 capitalize">
                    {course.course_type_trans}
                  </span>
                </div>
                <h3 className="font-semibold text-lg line-clamp-1">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-auto py-2 font-bold text-main-yellow text-base">
                  {getPrice(course)}
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
