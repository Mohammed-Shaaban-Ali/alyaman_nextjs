"use client";
import { useLocale, useTranslations } from "next-intl";
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
const ChangePhoneDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      mobile: "",
    },
  });
  // const [openOtp, setOpenOtp] = useState<boolean>(false);

  const onSubmit = () => {
    // mutate(values);
  };
  const locale = useLocale();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("Change password")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-6 flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phone number")}</FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="AE"
                      labels={locale == "ar" ? ar : en}
                      initialValueFormat="national"
                      placeholder={t("Enter Your Phone Here")}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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

export default ChangePhoneDialog;
