"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import parsePhoneNumberFromString, {
  CountryCode,
  getCountryCallingCode,
} from "libphonenumber-js";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useMutation } from "@tanstack/react-query";
import { IContactUsForm } from "@/utils/types";
import appService from "@/services/app";
import SentSuccessDialog from "./sent-success-dialog";
import SentFailedDialog from "./sent-failed-dialog";
const ContactUsForm = () => {
  const t = useTranslations();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const formSchema = z.object({
    name: z.string().nonempty({ message: t("Please enter your name") }),
    email: z.string().email({ message: t("Please enter a valid email") }),
    mobile: z
      .string()
      .nonempty({ message: t("Please enter your phone number") }),
    message: z.string().nonempty({ message: t("Please enter your message") }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["contactUs"],
    mutationFn: (data: IContactUsForm) => appService.contactUs(data),
    onSuccess: () => {
      form.reset();
      setIsSuccess(true);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const lang = useLocale();
  const [countryCode, setCountryCode] = useState<null | string>(null);
  const [country, setCountry] = useState<CountryCode>();
  useEffect(() => {
    if (country) {
      const code = getCountryCallingCode(country);
      setCountryCode(code);
    }
  }, [country]);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const phoneNumber = parsePhoneNumberFromString(form.getValues("mobile"), {
      defaultCallingCode: values.mobile,
    });
    if (!phoneNumber || !phoneNumber.isValid()) {
      form.setError("mobile", { message: t("invalid-phone-number") });
      return false;
    }
    mutate({
      ...values,
      mobile: phoneNumber.nationalNumber,
      mobile_country_code: phoneNumber.countryCallingCode,
    });
  };
  const handleCountryChange = useCallback((country: CountryCode) => {
    setCountry(country);
  }, []);
  const phoneLabels = useMemo(() => {
    return lang === "ar" ? ar : en;
  }, [lang]);
  return (
    <>
      {/* {faild && (
        <Modal ref={modalRef} width="329" setState={setFaild}>
          <Faild setState={setFaild} />
        </Modal>
      )} */}
      <SentSuccessDialog isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <SentFailedDialog isOpen={isFailed} setIsOpen={setIsFailed} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 max-w-3xl"
        >
          {/* the name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{t("Full Name")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("Enter Full Name Here")} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{t("Email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("Enter Email Here")}
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{t("Phone")}</FormLabel>
                <FormControl>
                  <PhoneInput
                    labels={phoneLabels}
                    value={field.value}
                    onChange={field.onChange}
                    onCountryChange={handleCountryChange}
                    className="!text-lg"
                    defaultCountry="AE"
                    placeholder={t("Enter Phone Here")}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message */}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{t("Messages")}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={t("Enter your Messages Here")}
                    className="resize-none !border  h-36 md:h-52 p-3 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* buttons */}
          <div className="mt-1 md:mt-5 relative z-[5] flex items-center gap-3">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full mt-6 font-medium cursor-pointer text-lg  text-white px-4 rounded-[18px] h-[52px] md:h-14"
            >
              {isPending ? <LoadingSpinner size={28} /> : t("Send")}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ContactUsForm;
