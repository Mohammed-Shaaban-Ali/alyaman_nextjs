"use client";
import CoursesFilters from "@/components/courses/courses-filters";
import CoursesList from "@/components/courses/courses-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import courseService from "@/services/course";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

const priceTypeOptions = [
  { label: "fixed", value: "fixed" },
  { label: "monthly", value: "monthly" },
  { label: "per_level", value: "per_level" },
];
const courseTypeOptions = [
  { label: "Course", value: "course" },
  { label: "Workshop", value: "workshop" },
];
const providderTypeOptions = [
  { label: "Individual", value: "individual" },
  { label: "Institution", value: "institution" },
];

import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { ChevronRight, CircleXIcon, Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  CourseProviders,
  CourseTypes,
  ICourseTeacher,
  PriceTypes,
} from "@/utils/types";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { emptyCategories } from "@/assets";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

const CoursesContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceType, setPriceType] = useState<
    "fixed" | "monthly" | "per_level" | undefined
  >(
    (searchParams.get("price_type") as "fixed" | "monthly" | "per_level") ||
      undefined
  );
  const [courseType, setCourseType] = useState<
    "course" | "workshop" | undefined
  >((searchParams.get("course_type") as "course" | "workshop") || undefined);
  const [globalType, setGlobalType] = useState<"institution" | "individual">(
    (searchParams.get("provider") as "institution" | "individual") ||
      "institution"
  );
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("keyword") || ""
  );
  const [searchValue, setSearchValue] = useState<string>(keyword);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Instructor param logic
  const instructorId = searchParams.get("instructor");
  const [teacherData, setTeacherData] = useState<ICourseTeacher | null>(null);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (priceType) params.set("price_type", priceType);
    if (courseType) params.set("course_type", courseType);
    if (globalType) params.set("provider", globalType);
    if (keyword) params.set("keyword", keyword);
    if (instructorId) params.set("instructor", instructorId);
    router.replace(`?${params.toString()}`);
  }, [priceType, courseType, globalType, keyword, instructorId, router]);

  // Clear input handler
  const handleClearInput = () => {
    if (searchParams.get("keyword") || searchValue) {
      setKeyword("");
      setSearchValue("");
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
    }
  };

  const { data, isLoading, isError } = useInfiniteQuery({
    queryKey: [
      "courses",
      priceType,
      courseType,
      globalType,
      keyword,
      instructorId,
      page,
    ],
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.data.meta.last_page,
    queryFn: () =>
      courseService.getCourses({
        institution_or_individual: globalType,
        price_type: priceType,
        course_type: courseType,
        key_words: keyword ? keyword : undefined,
        teacher_id: instructorId ? Number(instructorId) : undefined,
      }),
  });

  // Fetch teacher data if instructorId is present and courses are loaded
  useEffect(() => {
    const fetchTeacher = async () => {
      if (
        instructorId &&
        data &&
        Array.isArray(data.pages) &&
        data.pages[0] &&
        data.pages[0].data &&
        Array.isArray(data.pages[0].data.data) &&
        data.pages[0].data.data.length > 0
      ) {
        // Try to get teacher from first course
        const firstCourse = data.pages[0].data.data[0];
        if (firstCourse && firstCourse.teacher) {
          setTeacherData(firstCourse.teacher);
        } else {
          setTeacherData(null);
        }
      } else {
        setTeacherData(null);
      }
    };
    fetchTeacher();
  }, [instructorId, data]);
  const t = useTranslations();
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("Courses")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr />

      {/* Show teacher data if instructor param is present and teacherData is available */}
      {instructorId && teacherData && (
        <div className="flex items-center relative mt-3 justify-center gap-4 p-4 mb-4 bg-gray-50 rounded border border-gray-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className=" absolute start-0 top-0">
                <button
                  className="ml-2 px-4 py-2 bg-gray-200 cursor-pointer duration-300 transition-all hover:bg-gray-300 rounded text-xs font-medium"
                  onClick={() => {
                    setPriceType(undefined);
                    setCourseType(undefined);
                    setTeacherData(null);
                    setGlobalType("institution");
                    // Remove instructor param from URL
                    const params = new URLSearchParams(window.location.search);
                    params.delete("instructor");
                    // Also reset the URL params in the router
                    router.replace(`?${params.toString()}`);
                  }}
                >
                  <X className="size-4" />
                </button>
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("Clear Instructor Filter")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className=" absolute end-0 top-2">
                <Link href={"/instructors"}>
                  <div className="ml-2   cursor-pointer duration-300 transition-all text-main-dark bg-transparent rounded text-xs font-medium">
                    <ChevronRight className="size-6 rtl:rotate-180 ltr:rotate-0" />
                  </div>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("Back To Instructors")}</TooltipContent>
          </Tooltip>

          <div className="text-center">
            {t("Courses By")}{" "}
            <span className="font-semibold text-lg">{teacherData.name}</span>
            {teacherData.overview && (
              <div className="text-sm text-gray-600 mt-1">
                {teacherData.overview}
              </div>
            )}
            {/* Add more teacher fields as needed */}
          </div>
        </div>
      )}

      {/* Search input */}
      <div className="flex justify-center mt-6 items-center gap-2 w-full mb-2">
        <div className="relative flex items-center w-full max-w-md">
          <Input
            id="keyword"
            name="keyword"
            ref={searchInputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("Search courses") + "..."}
            className="pe-20"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setKeyword(searchValue);
              }
            }}
          />
          {(searchParams.get("keyword") || searchValue) && (
            <button
              type="button"
              className="absolute end-12 inset-y-0 flex h-full w-9 items-center justify-center text-main/60 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Clear input"
              onClick={handleClearInput}
            >
              <CircleXIcon size={16} aria-hidden="true" />
            </button>
          )}
          <Button
            size={"icon"}
            className="absolute end-2 top-[50%] h-full -translate-y-2/4 z-10 text-white size-10  rounded-e-md bg-main hover:bg-main/70 duration-300 cursor-pointer hover:text-main-yellow"
            aria-label="Search"
            onClick={() => setKeyword(searchValue)}
            tabIndex={0}
          >
            <Search size={20} />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 my-6 items-center">
        {/* Price Type Selector */}
        <Select
          onValueChange={(value) =>
            setPriceType((value as PriceTypes) || undefined)
          }
          value={priceType}
        >
          <SelectTrigger className="min-w-32">
            <SelectValue placeholder={t("price type")} />
          </SelectTrigger>
          <SelectContent>
            {priceTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {t(opt.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Course Type Selector */}
        <Select
          onValueChange={(value) =>
            setCourseType((value as CourseTypes) || undefined)
          }
          value={courseType}
        >
          <SelectTrigger className="min-w-32">
            <SelectValue placeholder={t("course type")} />
          </SelectTrigger>
          <SelectContent>
            {courseTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {t(opt.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => setGlobalType(value as CourseProviders)}
          value={globalType}
        >
          <SelectTrigger className="min-w-32">
            <SelectValue placeholder={t("Offered By")} />
          </SelectTrigger>
          <SelectContent>
            {providderTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {t(opt.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Reset Filters Button */}
        {(priceType || courseType || globalType !== "institution") && (
          <button
            className="ml-2 px-4 py-2 bg-gray-200 cursor-pointer duration-300 transition-all hover:bg-gray-300 rounded text-xs font-medium"
            onClick={() => {
              setPriceType(undefined);
              setCourseType(undefined);
              setGlobalType("institution");
            }}
          >
            {t("Reset Filters")}
          </button>
        )}
      </div>
      {/* Courses Grid */}
      {!isLoading && data?.pages[0].data.data.length === 0 && (
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
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-80 w-full" />
          ))}
        </div>
      ) : (
        <CoursesList courses={data} />
      )}
    </>
  );
};

export default CoursesContent;
