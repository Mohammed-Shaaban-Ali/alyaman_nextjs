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
  FormMessage,
} from "../ui/form";
import ForgetOtpInput from "../ui/ForgetOTPInput";
import { useEffect, useState } from "react";
const VerifyEmailDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const t = useTranslations();

  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  //   const [codeSent, setCodeSent] = useState<boolean>(false);

  //   const resendOTP = () => {
  //     setMinutes(2);
  //     setSeconds(0);
  //   };
  useEffect(() => {
    //interval
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    //interval
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);
  const form = useForm({
    defaultValues: {
      code: "",
    },
  });
  function onSubmitForm() {}
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("Change Email")}</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="flex flex-col">
            <p className="text-[#8A8A8A]">
              {t("We have sent a 6-digit code to")}
              <br />
              <span className="text-[#020202] font-medium">
                Ali12-asw@Gmail.com
              </span>
              <br />
              {t("This code will be valid for minutes")}
            </p>
          </div>
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmitForm)}
                className="verify-otp mt-6"
              >
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem dir="ltr">
                      <FormControl>
                        <ForgetOtpInput
                          onChange={(value) => {
                            field.onChange(value);
                            if (value.length === 6) {
                              form.handleSubmit(onSubmitForm)();
                            }
                          }}
                          value={field.value}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-1 justify-center mt-4 font-semibold text-sm">
                  <button
                    //   onClick={() => {
                    //     resend();
                    //   }}
                    disabled={seconds > 0 || minutes > 0}
                    type="submit"
                    className={`${
                      seconds > 0 || minutes > 0
                        ? "disable text-gray-400"
                        : "active"
                    }`}
                  >
                    {t("Resend the code")}
                  </button>
                  <p className="">
                    ( {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds})
                  </p>
                </div>
                <DialogFooter className="flex flex-row mt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-main border border-main hover:bg-main/90 hover:border-main/90 cursor-pointer rounded-2xl py-6"
                  >
                    {t("save")}
                  </Button>
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
          </>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmailDialog;
