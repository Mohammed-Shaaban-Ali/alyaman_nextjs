import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import EyeViewOffIcon from "../icons/EyeViewOffIcon";
import { useForm } from "react-hook-form";
import EyeViewIcon from "../icons/EyeViewIcon";
const DeleteAccountDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      password: "",
    },
  });
  // useEffect(() => {
  //   if (isOpen) {
  //     form.reset({
  //       name: currentUser?.name || "",
  //       city_id: currentUser?.city?.id.toString() || "",
  //       country_id: currentUser?.country?.id.toString() || "",
  //       date_of_birth: currentUser?.date_of_birth || "",
  //     });
  //   }
  // }, [currentUser, isOpen, form]);
  // const { mutate, isPending } = useMutation({
  //   mutationFn: (data: {
  //     name: string;
  //     city_id: string;
  //     country_id: string;
  //     date_of_birth: string;
  //   }) => userService.updateUserInfo(data),
  //   mutationKey: ["update-name"],
  //   onSuccess: (data) => {
  //     if (data.status) {
  //       setIsOpen(false);
  //       setUserData(data.data);
  //       toast.success(data.message);
  //     }
  //   },
  //   onError: (error) => {
  //     form.reset();

  //     toast.error(error.message);
  //   },
  // });

  // const { data: countries, isLoading: loadingCountries } = useQuery({
  //   queryKey: ["countries"],
  //   queryFn: () => appService.getCountries(),
  //   staleTime: 1000 * 60 * 60,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  // });
  // const { data: cities, isLoading: loadingCities } = useQuery({
  //   queryKey: ["cities", choosenCountry],
  //   queryFn: () => appService.getCities(choosenCountry ? choosenCountry : 1),
  //   staleTime: 1000 * 60 * 60,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  // });

  //   const { data: regionsData, isLoading: loadingRegions } = useQuery({
  //     queryKey: ["regions", choosenCity],
  //     queryFn: () => appService.getRegions(choosenCity ? choosenCity : 1),
  //     enabled: !!choosenCity,
  //     staleTime: 1000 * 60 * 60,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   });

  const onSubmit = () => {};

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[415px]">
        <DialogHeader>
          <DialogTitle>{t("Delete Account")}</DialogTitle>
        </DialogHeader>
        <p className="text-[#8A8A8A] text-sm py-3 max-w-[85%]">
          {t(
            "Please enter your password to confirm and complete the account deletion process"
          )}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-2">
                    {t("Current Password")}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={isVisiblePassword ? "text" : "password"}
                        tabIndex={-1}
                        className="rounded-xl py-8 border px-5"
                        placeholder={t("Enter Your Password Here")}
                        {...field}
                      />
                      <button
                        className="absolute mx-2 cursor-pointer inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-0 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label={
                          isVisiblePassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={isVisiblePassword}
                        aria-controls="password"
                      >
                        {isVisiblePassword ? (
                          <EyeViewIcon aria-hidden="true" />
                        ) : (
                          <EyeViewOffIcon aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex flex-row mt-4">
              <DialogClose asChild className="flex-1 cursor-pointer">
                <Button
                  type="submit"
                  className="flex-1 bg-[#D90202] border border-[#D90202] hover:bg-[#D90202]/90 hover:border-[#D90202]/90 cursor-pointer rounded-2xl py-6"
                >
                  {t("delete")}
                </Button>
              </DialogClose>
              <DialogClose
                asChild
                className="flex-1 cursor-pointer rounded-2xl"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-[#D90202] text-[#D90202] hover:text-[#D90202] py-6 rounded-2xl"
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

export default DeleteAccountDialog;
