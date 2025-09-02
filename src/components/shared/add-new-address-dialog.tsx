"use client";
import { CountryCode, getCountryCallingCode } from "libphonenumber-js";
import PhoneInput from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const AddNewAddressDialog = ({
  openNewAddress,
  setOpenNewAddress,
}: {
  setOpenNewAddress: React.Dispatch<React.SetStateAction<boolean>>;
  openNewAddress: boolean;
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const form = useForm({
    defaultValues: {
      country: "",
      city: "",
      phone: "",
      address: "",
    },
  });
  const [country, setCountry] = useState<CountryCode>();
  const [, setCountryCode] = useState<null | string>(null);

  useEffect(() => {
    if (country) {
      const code = getCountryCallingCode(country);
      setCountryCode(code);
    }
  }, [country]);
  function onSubmit() {}
  return (
    <Dialog open={openNewAddress} onOpenChange={setOpenNewAddress}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("Add New Address")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col mt-4 gap-6"
          >
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className=" md:text-base font-medium">
                    {t("Country")}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={"0"}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"Select Country"} />
                      </SelectTrigger>
                      <SelectContent defaultValue={"0"}>
                        <SelectItem value={"0"}>{"Egypt"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" md:text-base font-medium">
                    {t("City")}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={"0"}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"Select City"} />
                      </SelectTrigger>
                      <SelectContent defaultValue={"0"}>
                        <SelectItem value={"0"}>{"Cairo"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t("Phone")}</FormLabel>
                  <FormControl>
                    <PhoneInput
                      labels={locale == "ar" ? ar : en}
                      {...field}
                      onCountryChange={(country) => {
                        setCountry(country);
                      }}
                      className="!text-lg w-full max-w-full"
                      defaultCountry="AE"
                      onChange={field.onChange}
                      placeholder={t("Enter Phone Here")}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" md:text-base font-medium">
                    {t("Country")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("Enter Your Address Here")}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex flex-row mt-4">
              <Button
                type="submit"
                className="flex-1 bg-main border border-main hover:bg-main/90 hover:border-main/90 cursor-pointer rounded-xl py-6"
              >
                {t("Add")}
              </Button>
              <DialogClose asChild className="flex-1 cursor-pointer">
                <Button
                  onClick={() => {
                    setOpenNewAddress(true);
                  }}
                  type="button"
                  variant="outline"
                  className="flex-1 border-main text-main py-6 rounded-xl"
                >
                  {t("cancel")}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewAddressDialog;
