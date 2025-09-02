"use client";
import { useTranslations } from "next-intl";
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
const UpdateEmailDialog = ({
  isOpen,
  setIsOpen,
  setIsOpenVerifyEmail,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setIsOpenVerifyEmail: (value: boolean) => void;
}) => {
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      newEmail: "",
      confirmNewEmail: "",
    },
  });

  const onSubmit = () => {
    // mutate(values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("New Email")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex mt-6 flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="newEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">{t("new-email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder={t("Enter Your Email Here")}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">{t("confirm-new-email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder={t("Enter Your Confirm Email Here")}
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
                  onClick={() => setIsOpenVerifyEmail(true)}
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

export default UpdateEmailDialog;
