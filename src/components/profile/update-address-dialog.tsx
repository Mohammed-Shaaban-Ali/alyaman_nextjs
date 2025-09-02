"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
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
const UpdateAddressDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const lang = useLocale();
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      description: "",
      country: "",
      city: "",
      phone: "",
      address: "",
    },
  });
  function onSubmit() {}
  const [, setChoosenCity] = useState<number | string | null>(null);
  const [choosenCountry, setChoosenCountry] = useState<number | string | null>(
    null
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("Update Address")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-y-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-base text-sm">
                      {t("country")}
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setChoosenCountry(parseInt(value));
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full border border-solid py-8 md:rounded-2xl rounded-xl">
                          <SelectValue placeholder={t("select-country")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={"1"}>{"country.name"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-base text-sm">
                      {t("city")}
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setChoosenCity(parseInt(value));
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          disabled={choosenCountry == null}
                          className="w-full border border-solid  py-8 md:rounded-2xl rounded-xl"
                        >
                          <SelectValue placeholder={t("select-city")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={"1"}>{"city.name"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-base text-sm">
                      {t("phone")}
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        labels={lang == "ar" ? ar : en}
                        {...field}
                        defaultCountry="AE" // Default country (Egypt)
                        onChange={field.onChange}
                        placeholder={t("Enter Your Phone Here")}
                      />
                    </FormControl>

                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-base text-sm">
                      {t("Address")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="rounded-xl py-8 border px-5"
                        {...field}
                        placeholder={t("Enter Your Address Here")}
                      />
                    </FormControl>

                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="flex flex-row mt-4">
              <DialogClose asChild className="flex-1 cursor-pointer">
                <Button
                  type="submit"
                  className="flex-1 bg-main border border-main hover:bg-main/90 hover:border-main/90 cursor-pointer rounded-2xl py-6"
                >
                  {t("save")}
                </Button>
              </DialogClose>
              <DialogClose
                asChild
                className="flex-1 cursor-pointer rounded-2xl"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-main text-main py-6 rounded-2xl"
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

export default UpdateAddressDialog;
