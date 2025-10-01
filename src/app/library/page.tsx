"use client";

import AppContainer from "@/components/AppContainer";
import { useTranslations } from "next-intl";

import LibraryContent from "@/components/library/library-content";

export default function CoursesPage() {
  const t = useTranslations();
  return (
    <AppContainer className=" mx-auto py-8">
      <LibraryContent />
    </AppContainer>
  );
}
