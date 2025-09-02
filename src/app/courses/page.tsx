"use client";
import React from "react";

import AppContainer from "@/components/AppContainer";
import MultipleSelector01 from "@/components/ui/multi-select-01";
import { useTranslations } from "next-intl";

import CoursesContent from "@/components/courses/courses-content";

export default function CoursesPage() {
  const t = useTranslations();
  return (
    <AppContainer className=" mx-auto py-8">
      <CoursesContent />
    </AppContainer>
  );
}
