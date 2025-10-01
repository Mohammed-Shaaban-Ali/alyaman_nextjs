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
import { CircleXIcon, Search } from "lucide-react";
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
  const [categoty, setCategoty] = useQueryState(
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
    setCategoty(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["books", keyword, page, categoty],
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 60,
    retry: false,
    queryFn: () =>
      libraryService.getBooks({
        key_words: keyword ? keyword : undefined,
        page,
        category_id: categoty ? Number(categoty) : undefined,
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
      <div className="flex justify-center mt-6 items-center gap-2 w-full mb-2">
        <div className="relative mb-5 flex items-center w-full max-w-md">
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
        </div>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 my-6 items-center">
        {/* Language */}
        {isLoading ? (
          <div className="w-32 h-12 animate-pulse bg-gray-100 rounded-xl"></div>
        ) : (
          <Select
            onValueChange={(val) => {
              setCategoty(val);
              setPage(1);
            }}
            value={categoty ?? ""}
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

        {keyword || categoty ? (
          <button
            className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-medium"
            onClick={handleResetFilters}
          >
            {t("Reset Filters")}
          </button>
        ) : null}
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
