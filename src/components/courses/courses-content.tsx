"use client";
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
import { useQuery } from "@tanstack/react-query";
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
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import PaginationLinks01 from "../ui/pagination-links-01";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { ChevronRight, CircleXIcon, Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// 🔑 nuqs
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";

const priceTypeOptions = [
  { label: "fixed", value: "fixed" },
  { label: "monthly", value: "monthly" },
  { label: "per_level", value: "per_level" },
];
const courseTypeOptions = [
  { label: "Course", value: "course" },
  { label: "Workshop", value: "workshop" },
];
const providerTypeOptions = [
  { label: "Individual", value: "individual" },
  { label: "Institution", value: "institution" },
];

const CoursesContent = () => {
  const t = useTranslations();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // nuqs-based state (synced with URL params)
  const [priceType, setPriceType] = useQueryState(
    "price_type",
    parseAsString.withDefault("")
  );
  const [courseType, setCourseType] = useQueryState(
    "course_type",
    parseAsString.withDefault("")
  );
  const [provider, setProvider] = useQueryState(
    "provider",
    { clearOnDefault: false, defaultValue: "institution" }
    // parseAsString.withDefault("institution"),
  );
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [keyword, setKeyword] = useQueryState(
    "keyword",
    parseAsString.withDefault("")
  );
  const [instructorId, setInstructorId] = useQueryState(
    "instructor",
    parseAsString.withDefault("")
  );

  const [searchValue, setSearchValue] = useState<string>(keyword);
  const [teacherData, setTeacherData] = useState<ICourseTeacher | null>(null);

  // Clear input
  const handleClearInput = () => {
    setKeyword(null); // removes from URL
    setSearchValue("");
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  // Reset filters
  const handleResetFilters = () => {
    setPriceType(null);
    setCourseType(null);
    setProvider("institution");
    setKeyword(null);
    setPage(1);
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      "courses",
      priceType,
      courseType,
      provider,
      keyword,
      instructorId,
      page,
    ],
    queryFn: () =>
      courseService.getCourses(
        {
          institution_or_individual: "individual",
          price_type: priceType as PriceTypes,
          course_type: courseType as CourseTypes,
          key_words: keyword ? keyword : undefined,
          teacher_id: instructorId ? Number(instructorId) : undefined,
        },
        page
      ),
  });

  // Fetch teacher data if instructorId is present
  useEffect(() => {
    if (
      instructorId &&
      data &&
      data.data &&
      Array.isArray(data.data.data) &&
      data.data.data.length > 0
    ) {
      const firstCourse = data.data.data[0];
      if (firstCourse?.teacher) {
        setTeacherData(firstCourse.teacher);
      } else {
        setTeacherData(null);
      }
    } else {
      setTeacherData(null);
    }
  }, [instructorId, data]);

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

      {/* Instructor filter active */}
      {instructorId && teacherData && (
        <div className="flex items-center relative mt-3 justify-center gap-4 p-4 mb-4 bg-gray-50 rounded border border-gray-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute start-0 top-0">
                <button
                  className="px-4 py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded text-xs font-medium"
                  onClick={() => {
                    setInstructorId(null);
                    setTeacherData(null);
                    setPriceType(null);
                    setCourseType(null);
                    setProvider("institution");
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
              <div className="absolute end-2 top-2">
                <Link href={"/instructors"}>
                  <div className=" cursor-pointer text-main-dark">
                    <ChevronRight className="size-6 rtl:rotate-180" />
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
          </div>
        </div>
      )}

      {/* Search input */}
      <div className="flex justify-center mt-6 items-center gap-2 w-full mb-2">
        <div className="relative flex items-center w-full max-w-md">
          <Input
            id="keyword"
            ref={searchInputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("Search courses") + "..."}
            className="pe-20"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setKeyword(searchValue || null);
                setPage(1);
              }
            }}
          />
          {(keyword || searchValue) && (
            <button
              type="button"
              className="absolute end-12 inset-y-0 flex h-full w-9 items-center justify-center text-main/60 hover:text-foreground"
              aria-label="Clear input"
              onClick={handleClearInput}
            >
              <CircleXIcon size={16} />
            </button>
          )}
          <Button
            size="icon"
            className="absolute end-2 top-1/2 -translate-y-1/2 z-10 text-white size-10 rounded-e-md bg-main hover:bg-main/70"
            aria-label="Search"
            onClick={() => {
              setKeyword(searchValue || null);
              setPage(1);
            }}
          >
            <Search size={20} />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 my-6 items-center">
        <Select
          onValueChange={(val) => {
            setPriceType(val || null);
            setPage(1);
          }}
          value={priceType ?? ""}
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

        <Select
          onValueChange={(val) => {
            setCourseType(val || null);
            setPage(1);
          }}
          value={courseType ?? ""}
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
          onValueChange={(val) => {
            setProvider(val as CourseProviders);
            setPage(1);
          }}
          value={provider}
        >
          <SelectTrigger className="min-w-32">
            <SelectValue placeholder={t("Offered By")} />
          </SelectTrigger>
          <SelectContent>
            {providerTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {t(opt.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {(priceType || courseType || provider !== "institution") && (
          <button
            className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-medium"
            onClick={handleResetFilters}
          >
            {t("Reset Filters")}
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {!isLoading && data?.data.data.length === 0 && (
        <div className="flex py-32 justify-center gap-y-6 flex-col items-center">
          <div className="relative size-32">
            <Image src={emptyCategories} alt="NoCourses" fill />
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
        <CoursesList courses={data?.data.data} />
      )}

      {!isLoading && data && data.data.meta.last_page > 1 && (
        <div className="mt-8">
          <PaginationLinks01
            currentPage={data.data.meta.current_page}
            totalPages={data.data.meta.last_page}
            paginationItemsToDisplay={4}
          />
        </div>
      )}
    </>
  );
};

export default CoursesContent;
