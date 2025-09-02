"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";

interface BreadcrumbStep {
  text: string;
  href?: string;
}

interface AppBreadCrumbProps {
  steps: BreadcrumbStep[];
}

const AppBreadCrumb = ({ steps }: AppBreadCrumbProps) => {
  const t = useTranslations();
  return (
    <Breadcrumb className="bg-[#ECECEC66] px-4 py-5 my-4 rounded-2xl">
      <BreadcrumbList className="flex flex-row items-center gap-2">
        {steps.map((step, index) => (
          <div key={step.text} className="flex flex-row items-center">
            <BreadcrumbItem>
              {index === steps.length - 1 ? (
                <BreadcrumbPage className="cursor-pointer text-[#8A8A8A] hover:text-[#404040] font-medium">
                  {t(step.text.charAt(0).toUpperCase() + step.text.slice(1))}
                </BreadcrumbPage>
              ) : (
                <>
                  {step.href ? (
                    <BreadcrumbLink
                      href={step.href}
                      className="text-[#404040] cursor-pointer transition-colors duration-300"
                    >
                      {t(
                        step.text.charAt(0).toUpperCase() + step.text.slice(1)
                      )}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink className="text-[#404040] cursor-pointer transition-colors duration-300">
                      {t(
                        step.text.charAt(0).toUpperCase() + step.text.slice(1)
                      )}
                    </BreadcrumbLink>
                  )}
                </>
              )}
            </BreadcrumbItem>
            {index < steps.length - 1 && (
              <BreadcrumbSeparator className="text-main-black rtl:rotate-180 scale-150 ms-2" />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadCrumb;
