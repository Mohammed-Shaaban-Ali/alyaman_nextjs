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
import BooksList from "./books-list";
import libraryService from "@/services/library";

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

const LibraryContent = () => {
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
    setLearningType(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["books", keyword, page],
    queryFn: () =>
      libraryService.getBooks(
        {
          key_words: keyword ? keyword : undefined,
        },
        page
      ),
  });

  // Fetch teacher data if instructorId is present

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
            <BreadcrumbPage>{t("Library")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr />

      {/* Search input */}
      <div className="flex justify-center mt-6 items-center gap-2 w-full mb-2">
        <div className="relative mb-5 flex items-center w-full max-w-md">
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

      {/* Courses Grid */}
      {!isLoading && data?.data.data.length === 0 && (
        <div className="flex py-32 justify-center gap-y-6 flex-col items-center">
          <div className="relative size-32">
            <Image src={emptyCategories} alt="NoCourses" fill />
          </div>
          <p className="text-center max-w-xs md:text-base text-sm">
            {t("There are no Books yet")}
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
        <BooksList books={data?.data.data} />
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

export default LibraryContent;
