"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CountryCode, getCountryCallingCode } from "libphonenumber-js";
import PhoneInput from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import UpdateEmailDialog from "./update-email-dialog";
import VerifyEmailDialog from "./verify-email-dialog";
import DeleteAccountDialog from "./delete-account-dialog";
import ChangePasswordDialog from "./change-password-dialog";
import ChangePhoneDialog from "./change-phone-dialog";
const AccountInfo = () => {
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      email: "motazessamdev@gmail.com",
      fullName: "Motaz Essam",
      phone: "+2001124030556",
      password: "123456788524874512",
    },
  });

  const [country, setCountry] = useState<CountryCode>();
  const [, setCountryCode] = useState<null | string>(null);
  const locale = useLocale();

  useEffect(() => {
    if (country) {
      const code = getCountryCallingCode(country);
      setCountryCode(code);
    }
  }, [country]);
  const onFormSubmit = () => {
    // mutate(values);
  };
  const [isOpenChangeEmail, setIsOpenChangeEmail] = useState(false);
  const [isOpenVerifyEmail, setIsOpenVerifyEmail] = useState(false);
  const [isOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false);
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenChangePhone, setIsOpenChangePhone] = useState(false);
  return (
    <div className="account-info">
      <UpdateEmailDialog
        isOpen={isOpenChangeEmail}
        setIsOpenVerifyEmail={setIsOpenVerifyEmail}
        setIsOpen={setIsOpenChangeEmail}
      />
      <VerifyEmailDialog
        isOpen={isOpenVerifyEmail}
        setIsOpen={setIsOpenVerifyEmail}
      />
      <DeleteAccountDialog
        isOpen={isOpenDeleteAccount}
        setIsOpen={setIsOpenDeleteAccount}
      />
      <ChangePasswordDialog
        isOpen={isOpenChangePassword}
        setIsOpen={setIsOpenChangePassword}
      />
      <ChangePhoneDialog
        isOpen={isOpenChangePhone}
        setIsOpen={setIsOpenChangePhone}
      />
      <h2 className="font-semibold text-lg ">{t("Account Info")}</h2>
      <div className="data mt-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="grid grid-cols-2 gap-y-4"
          >
            <div className="grid md:grid-cols-2 col-span-2 grid-cols-1 w-full gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Full Name")}</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="pe-[75px]"
                        placeholder={t("Enter Your Full Name Here")}
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
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          readOnly
                          className="peer pe-12 read-only:bg-[#F5F5F5]"
                          placeholder={t("Enter Your Email Here")}
                          type="email"
                          value={field.value}
                        />
                        <span
                          onClick={() => setIsOpenChangeEmail(true)}
                          className="text-[#404040] font-medium select-none underline cursor-pointer absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
                        >
                          {t("Change")}
                        </span>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Phone */}
            <div className="md:col-span-1 col-span-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">{t("Phone")}</FormLabel>
                    <FormControl>
                      <div className="relative ">
                        <PhoneInput
                          readOnly
                          labels={locale == "ar" ? ar : en}
                          {...field}
                          onCountryChange={(country) => {
                            setCountry(country);
                          }}
                          className="!text-lg w-full !bg-[#F5F5F5] cursor-text max-w-full"
                          defaultCountry="AE"
                          onChange={field.onChange}
                          placeholder={t("Enter Phone Here")}
                        />
                        <span
                          onClick={() => setIsOpenChangePhone(true)}
                          className="text-[#404040] font-medium select-none underline cursor-pointer absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
                        >
                          {t("Change")}
                        </span>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col mt-8">
                <h3 className="font-semibold text-lg">{t("My Password")}</h3>
                <div className="password mt-4 space-y-2">
                  <Label htmlFor="password">{t("Password")}</Label>

                  <div className="relative">
                    <Input
                      id="password"
                      readOnly
                      onChange={() => {}}
                      defaultValue={"1234567"}
                      className="peer pe-[75px] read-only:bg-[#F5F5F5]"
                      type="password"
                      placeholder={t("Enter Your Password Here")}
                    />
                    <span
                      onClick={() => setIsOpenChangePassword(true)}
                      className="text-[#404040] font-medium select-none underline cursor-pointer absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
                    >
                      {t("Change")}
                    </span>
                  </div>
                  <div className="flex flex-col ">
                    <p className="font-medium text-xs max-w-xs">
                      {t("forget_pass")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold text-lg">{t("My Account")}</h3>
                  <p className="text-sm mb-4 text-[#8A8A8A] font-medium">
                    {t("Would you like to delete your account")}
                  </p>
                  <p
                    onClick={() => setIsOpenDeleteAccount(true)}
                    className="cursor-pointer text-[#D90202] font-semibold underline"
                  >
                    Yes I want to delete my Account
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AccountInfo;
