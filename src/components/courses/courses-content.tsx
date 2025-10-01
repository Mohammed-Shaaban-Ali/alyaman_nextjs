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
import {
  ChevronRight,
  CircleXIcon,
  RefreshCcwDot,
  Search,
  X,
} from "lucide-react";
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
const learningTypeOptions = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Mixed", value: "mixed" },
  { label: "Self Study", value: "self-study" },
];

const CoursesContent = () => {
  const t = useTranslations();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // nuqs-based state (synced with URL params)
  const [priceType, setPriceType] = useQueryState(
    "price_type",
    parseAsString.withDefault("")
  );
  const [learningType, setLearningType] = useQueryState(
    "learning_type",
    parseAsString.withDefault("")
  );
  const [courseType, setCourseType] = useQueryState(
    "course_type",
    parseAsString.withDefault("")
  );
  const [provider, setProvider] = useQueryState("provider", {
    clearOnDefault: false,
    defaultValue: "institution",
  });
  const [language, setLanguage] = useQueryState(
    "language",
    parseAsString.withDefault("")
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

  // ✅ New duration filters
  const [minDuration, setMinDuration] = useQueryState(
    "min_duration",
    parseAsInteger.withDefault(0)
  );
  const [maxDuration, setMaxDuration] = useQueryState(
    "max_duration",
    parseAsInteger.withDefault(0)
  );

  const [searchValue, setSearchValue] = useState<string>(keyword);
  const [teacherData, setTeacherData] = useState<ICourseTeacher | null>(null);

  // Clear input
  const handleClearInput = () => {
    setKeyword(null);
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
    setLearningType(null);
    setLanguage(null);
    setMinDuration(0);
    setMaxDuration(0);
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
      language,
      minDuration,
      maxDuration,
    ],
    queryFn: () =>
      courseService.getCourses(
        {
          institution_or_individual: "individual",
          price_type: priceType as PriceTypes,
          course_type: courseType as CourseTypes,
          key_words: keyword ? keyword : undefined,
          teacher_id: instructorId ? Number(instructorId) : undefined,
          language_id: language ? Number(language) : undefined,
          min_duration: minDuration || undefined,
          max_duration: maxDuration || undefined,
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
      Array.isArray(data.data.courses.data) &&
      data.data.courses.data.length > 0
    ) {
      const firstCourse = data.data.courses.data[0];
      if (firstCourse?.teacher) {
        setTeacherData(firstCourse.teacher);
      } else {
        setTeacherData(null);
      }
    } else {
      setTeacherData(null);
    }
  }, [instructorId, data]);

  const languageTypeOptions = data?.data?.languages;

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
        {/* Price Type */}
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

        {/* Course Type */}
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

        {/* Provider */}
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

        {/* Learning Type */}
        <Select
          onValueChange={(val) => {
            setLearningType(val);
            setPage(1);
          }}
          value={learningType ?? ""}
        >
          <SelectTrigger className="min-w-32">
            <SelectValue placeholder={t("Learning Type")} />
          </SelectTrigger>
          <SelectContent>
            {learningTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {t(opt.label)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Language */}
        {isLoading ? (
          <div className="w-32 h-12 animate-pulse bg-gray-100 rounded-xl"></div>
        ) : (
          <Select
            onValueChange={(val) => {
              setLanguage(val);
              setPage(1);
            }}
            value={language ?? ""}
          >
            <SelectTrigger className="min-w-32">
              <SelectValue placeholder={t("Language")} />
            </SelectTrigger>
            <SelectContent>
              {languageTypeOptions?.map((opt) => (
                <SelectItem key={opt.id} value={`${opt.id}`}>
                  {opt.native_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* ✅ Duration Filter */}
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder={t("Min Duration")}
            value={minDuration || ""}
            onChange={(e) => setMinDuration(Number(e.target.value) || 0)}
            className="w-28"
          />
          <span>-</span>
          <Input
            type="number"
            placeholder={t("Max Duration")}
            value={maxDuration || ""}
            onChange={(e) => setMaxDuration(Number(e.target.value) || 0)}
            className="w-28"
          />
        </div>

        {priceType ||
        courseType ||
        provider !== "institution" ||
        minDuration ||
        maxDuration ? (
          <button
            className="ml-1 h-12 w-12 justify-center  bg-red-600 hover:bg-red-700 cursor-pointer text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 group"
            onClick={handleResetFilters}
          >
            <RefreshCcwDot className="group-hover:rotate-90 transition-transform duration-200 w-6 h-6" />
          </button>
        ) : null}
      </div>

      {/* Courses Grid */}
      {!isLoading && data?.data.courses.data?.length === 0 && (
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
        <CoursesList courses={data?.data.courses.data} />
      )}

      {!isLoading && data && data.data.courses?.meta.last_page > 1 && (
        <div className="mt-8">
          <PaginationLinks01
            currentPage={data.data.courses?.meta.current_page}
            totalPages={data.data.courses?.meta.last_page}
            paginationItemsToDisplay={4}
          />
        </div>
      )}
    </>
  );
};

export default CoursesContent;
