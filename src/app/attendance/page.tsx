"use client";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import courseService from "@/services/course";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Zod schema for validation
const schema = z.object({
  student_code: z.string().min(1, "Required"),
});

type FormValues = z.infer<typeof schema>;

// Dummy API call (replace with your real API call)
async function submitAttendance({
  student_code,
  lecture_code,
}: {
  student_code: string;
  lecture_code: string;
}) {
  // Replace with your API logic
  const res = await fetch("/api/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_code, lecture_code }),
  });
  if (!res.ok) throw new Error("Failed");
  return res.json();
}

export default function AttendancePage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const lecture_code = searchParams.get("lecture_code") || "";

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { student_code: "" },
  });

  const mutation = useMutation({
    mutationFn: (data: { student_code: string; lecture_code: string }) =>
      courseService.attendStudent(data),
    onSuccess: (data) => {
      toast.success(data.message, {
        position: "top-center",
      });
      form.reset();
    },
    onError: (err: any) => {
      toast.error(err.message || "An error occurred", {
        position: "top-center",
        style: { color: "oklch(.704 .191 22.216)" },
      });
    },
  });
  useGSAP(() => {
    gsap.fromTo(
      ".main-attendence",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.in" }
    );
  });
  if (!lecture_code) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">
            Missing Lecture Code
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex main-attendence shadow-main-dark/20 rounded-2xl opacity-0 shadow-sm max-w-2xl m-auto mt-8 flex-col items-center justify-center min-h-[60vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            mutation.mutate({ lecture_code, ...data })
          )}
          className="space-y-4 w-full max-w-xs"
        >
          <FormField
            control={form.control}
            name="student_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Student Code")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("Enter your code") + "..."}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full cursor-pointer bg-main-dark hover:bg-main-dark/90 duration-300 hover:text-white"
            disabled={mutation.status === "pending" || !form.formState.isValid}
          >
            {mutation.status === "pending" ? (
              <LoadingSpinner />
            ) : (
              t("Confirm attendance")
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
