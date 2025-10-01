import AppContainer from "@/components/AppContainer";
import appService from "@/services/app";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";
const Page = async () => {
  const policyData = await appService.getPolicies();
  const t = await getTranslations();
  return (
    <AppContainer>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("Posts")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr />
      <AppContainer className=" policy-container ">
        <div
          className="py-6"
          dangerouslySetInnerHTML={{ __html: policyData.data.text }}
        />
      </AppContainer>
    </AppContainer>
  );
};

export default Page;
