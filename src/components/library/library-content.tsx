"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { emptyCategories } from "@/assets";
import { Button } from "../ui/button";
import PaginationLinks01 from "../ui/pagination-links-01";

import { Input } from "../ui/input";
import { CircleXIcon, RefreshCcwDot, Search } from "lucide-react";
import { useState, useRef } from "react";

// 🔑 nuqs
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import BooksList from "./books-list";
import libraryService from "@/services/library";

const LibraryContent = () => {
  const t = useTranslations();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [keyword, setKeyword] = useQueryState(
    "keyword",
    parseAsString.withDefault("")
  );
  const [category, setcategory] = useQueryState(
    "category",
    parseAsString.withDefault("")
  );
  const [searchValue, setSearchValue] = useState<string>(keyword);

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
    setKeyword(null);
    setPage(1);
    setcategory(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["books", keyword, page, category],
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 60,
    retry: false,
    queryFn: () =>
      libraryService.getBooks({
        key_words: keyword ? keyword : undefined,
        page,
        category_id: category ? Number(category) : undefined,
      }),
  });

  const categoryTypeOptions = data?.data?.categories;
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
      <div className="flex flex-col md:flex-row justify-center mt-6 items-center gap-3 w-full mx-auto mb-5">
        <div className="relative flex items-center w-full max-w-md">
          <Input
            id="keyword"
            ref={searchInputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("Search Books") + "..."}
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
        </div>{" "}
        <div className="flex  gap-4  items-center ">
          {/* Language */}
          {isLoading ? (
            <div className="w-32 h-12 animate-pulse bg-gray-100 rounded-xl"></div>
          ) : (
            <Select
              onValueChange={(val) => {
                setcategory(val);
                setPage(1);
              }}
              value={category ?? ""}
            >
              <SelectTrigger className="min-w-32">
                <SelectValue placeholder={t("Select Category")} />
              </SelectTrigger>
              <SelectContent>
                {categoryTypeOptions?.map((opt) => (
                  <SelectItem key={opt.id} value={`${opt.id}`}>
                    {opt.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {(keyword || category) && (
            <button
              className="ml-1 h-12 w-12 justify-center  bg-red-600 hover:bg-red-700 cursor-pointer text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 group"
              onClick={handleResetFilters}
            >
              <RefreshCcwDot className="group-hover:rotate-90 transition-transform duration-200 w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      {!isLoading && data?.data.books.data.length === 0 && (
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
        <BooksList books={data?.data.books.data} />
      )}

      {!isLoading && data && data.data.books.meta.last_page > 1 && (
        <div className="mt-8">
          <PaginationLinks01
            currentPage={data.data.books.meta.current_page}
            totalPages={data.data.books.meta.last_page}
            paginationItemsToDisplay={4}
          />
        </div>
      )}
    </>
  );
};

export default LibraryContent;
