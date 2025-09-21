"use client";
import AppContainer from "@/components/AppContainer";
import React, { useCallback, useMemo } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUpload02 from "@/components/ui/file-upload-02";
import appService from "@/services/app";
import { IJobApplyBody } from "@/utils/types";
import { useLocale, useTranslations } from "next-intl";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import { PhoneInput } from "@/components/ui/phone-input";
import parsePhoneNumberFromString, { CountryCode } from "libphonenumber-js";
import { toast } from "sonner";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { useSearchParams } from "next/navigation";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function JobApplyPage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const education = searchParams.get("education");
  const specialization = searchParams.get("specialization");
  const schema = z.object({
    full_name: z.string().min(1, t("Required")).max(255),
    email: z.string().email(t("Invalid email")).max(255),
    phone: z.string().min(1, t("Required")).max(20),
    address: z.string().max(500).optional(),
    birth_date: z.string().refine(
      (val) => {
        if (!val) return false;
        const date = new Date(val);
        return date < new Date();
      },
      { message: t("Birth date must be before today") }
    ),
    education: z.string().min(1, t("Required")).max(255),
    specialization: z.string().min(1, t("Required")).max(255),
    previous_experience: z.string().optional(),
    desired_position: z.string().max(255).optional(),
    cv: z
      .custom<File>()
      .refine((file) => !!file, { message: t("CV is required") })
      .refine(
        (file) => {
          const f = file;
          return (
            !!f &&
            f.size <= MAX_FILE_SIZE &&
            ACCEPTED_FILE_TYPES.includes(f.type)
          );
        },
        { message: t("cv-error-form") }
      ),
    notes: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<CountryCode>();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      birth_date: "",
      education: education || "",
      specialization: specialization || "",
      previous_experience: "",
      desired_position: "",
      notes: "",
    },
  });
  const handleCountryChange = useCallback((country: CountryCode) => {
    setCountry(country);
  }, []);
  const mutation = useMutation({
    mutationFn: (data: IJobApplyBody) => appService.sendJobApplication(data),
    onSuccess: (data) => {
      toast.success(data.message);
      form.reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function onSubmit(data: z.infer<typeof schema>) {
    const phoneNumber = parsePhoneNumberFromString(form.getValues("phone"), {
      defaultCallingCode: data.phone,
    });
    if (!phoneNumber || !phoneNumber.isValid()) {
      form.setError("phone", { message: t("invalid-phone-number") });
      return false;
    }
    const payload: IJobApplyBody = {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      address: data.address || undefined,
      birth_date: data.birth_date,
      education: data.education,
      specialization: data.specialization,
      previous_experience: data.previous_experience || undefined,
      desired_position: data.desired_position || undefined,
      cv: data.cv,
      notes: data.notes || undefined,
    };
    mutation.mutate(payload);
  }
  const lang = useLocale();
  const phoneLabels = useMemo(() => {
    return lang === "ar" ? ar : en;
  }, [lang]);
  return (
    <div className="bg-muted-foreground/20">
      <AppContainer>
        <div className="max-w-xl mx-auto py-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("Job Application")}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Full Name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("enter your full name here")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Email")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Enter your email here")}
                            {...field}
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Phone")}</FormLabel>
                        <FormControl>
                          <PhoneInput
                            value={field.value}
                            onChange={field.onChange}
                            onCountryChange={handleCountryChange}
                            className="!text-lg text-left [unicode-bidi:plaintext]"
                            defaultCountry="AE"
                            placeholder={t("Enter Phone Here")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Address")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Enter Your Address Here")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name="birth_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Birth Date")}</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <DatePickerDemo />
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Education")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Enter Your Education Here")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Specialization")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Enter Your Specialization Here")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="previous_experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Previous Experience")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t(
                              "Enter Your Previous Experience Here"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desired_position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Desired Position")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Enter Your Desired Position")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FileUpload02 />
                  {/* <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CV (PDF, DOC, DOCX, max 5MB)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => field.onChange(e.target.files)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Notes")}</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-main py-5 hover:bg-main/80 duration-500"
                    disabled={mutation.status === "pending"}
                  >
                    {mutation.status === "pending" ? (
                      <LoadingSpinner />
                    ) : (
                      t("Apply Now")
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </AppContainer>
    </div>
  );
}
