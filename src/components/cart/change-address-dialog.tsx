"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ChangeAddressDialog = ({
  setOpenNewAddress,
}: {
  setOpenNewAddress: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      address_id: "",
    },
  });
  function onSubmit() {}
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <span className="underline text-sm font-medium">{t("Change")}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("Change Address")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col mt-4 gap-3"
          >
            <FormField
              control={form.control}
              name="address_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" md:text-base font-medium">
                    {t("Select Address")}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value); // Update the form field value
                      }}
                      defaultValue={"0"}
                    >
                      <SelectTrigger className="w-full border border-solid py-6 md:rounded-2xl rounded-xl">
                        <SelectValue placeholder={"Select Address"} />
                      </SelectTrigger>
                      <SelectContent defaultValue={"0"}>
                        <SelectItem value={"0"}>{"address.title"}</SelectItem>
                      </SelectContent>
                    </Select>
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
                {t("save")}
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
                  {t("Add New Address")}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeAddressDialog;
