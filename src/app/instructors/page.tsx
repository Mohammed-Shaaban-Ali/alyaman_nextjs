import React from "react";
import Link from "next/link";
import Image from "next/image";
import { instructors } from "@/app/instructor/mock-instructors";
import * as assets from "@/assets";
import AppContainer from "@/components/AppContainer";
import InstructorsContent from "@/components/instructors/instructors-content";

const Page = () => {
  return (
    <AppContainer className=" mx-auto py-8">
      <InstructorsContent />
    </AppContainer>
  );
};

export default Page;
