"use client";
import { heroBg, logo } from "@/assets";
import TLFaceBookLine from "@/components/facebook-line";
import TLInstagramLine from "@/components/instagram-line";
import TLLinkedInLine from "@/components/linkedin-line";
import TLLocationIcon from "@/components/location-icon";
import TLMailIcon from "@/components/mail-icon";
import TLMailLineIcon from "@/components/mail-line-icon";
import TLMessangerLine from "@/components/messanger-line";
import TLPhoneIcon from "@/components/phone-icon";
import TLTelegramLine from "@/components/telegram-line";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TLWhatsappLine from "@/components/whatsapp-line";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});
const FooterStyle15 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <footer className="mt-20  bg-[#153900] ltr:rounded-tl-[6rem] rtl:rounded-tr-[6rem] relative w-full  h-full ">
      <Image fill src={heroBg} alt="" className="z-10  rounded-t-[6rem]" />
      <div className=" z-[35] mx-auto container lg:px-20 px-6 pt-16 flex gap-y-4 flex-row justify-between order-1 col-span-2 gap-6 w-full">
        <div className="size-20 z-[35]  relative">
          <Image
            src={logo}
            alt="dummy"
            className="z-30 object-contain absolute"
            fill
          />
        </div>
      </div>
      <div className="flex container z-[35]  mx-auto lg:px-20 px-6 flex-row items-center gap-3 justify-between text-white  pt-12 pb-12 border-b border-input/30 mt-4 font-semibold">
        <div className="grid grid-cols-2 z-[35] gap-6 lg:grid-cols-4">
          <div className="order-1">
            <h3 className="mb-4 text-white text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4 md:text-base text-sm text-[#FFFFFFB2]">
              <Link href={"#"} className="flex flex-row gap-2">
                <TLPhoneIcon className="text-white" />
                <li dir="ltr" className="font-medium  ">
                  +87 01928491
                </li>
              </Link>
              <Link href={"#"} className="flex flex-row gap-2 items-center">
                <span className="flex-shrink-0">
                  <TLMailIcon className="text-white" />
                </span>
                <li className="font-medium  break-all">Name_110@gmail.com</li>
              </Link>

              <Link href={"#"} className="flex flex-row gap-2">
                <TLLocationIcon className="text-white" />
                <li className="font-medium ">381, Cairo, Egypt</li>
              </Link>
            </ul>
          </div>

          <div className="order-2">
            <h3 className="mb-4 text-white text-xl font-bold">Let Us Help</h3>
            <ul className="space-y-4 md:text-base text-sm text-[#FFFFFFB2]">
              <li className="font-medium ">
                <Link href={"#"}>My Account</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>FAQs</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>Contact & Support</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>Categories</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>All Products</Link>
              </li>
            </ul>
          </div>
          <div className="lg:order-4 order-3">
            <h3 className="mb-4 text-white text-xl font-bold">Policies</h3>
            <ul className="space-y-4 md:text-base text-sm text-[#FFFFFFB2]">
              <li className="font-medium ">
                <Link href={"#"}>Refund Policy</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>About Us</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>Cancellation Policy</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>Terms and Conditions</Link>
              </li>
              <li className="font-medium ">
                <Link href={"#"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="order-5 z-30 gap-y-5 flex flex-col ">
            <h3 className=" text-white text-xl font-bold">Send Email</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative ">
                          <div className="p-2 absolute start-0 top-3">
                            <TLMailLineIcon className="" />
                          </div>
                          <Input
                            placeholder="Email Address"
                            className="bg-transparent placeholder:font-normal sm:placeholder:text-xs placeholder:text-[12px] placeholder:text-white text-white border-b border-white border-x-0 border-t-0 rounded-none ps-12 pe-12 flex-1 h-16 shadow-none focus-visible:z-10"
                            {...field}
                          />
                          <Button
                            variant={"ghost"}
                            className="absolute cursor-pointer  hover:bg-gray-100  p-2 end-2 top-3"
                          >
                            <ArrowRightIcon className="rtl:hidden" />
                            <ArrowLeftIcon className="ltr:hidden" />
                          </Button>
                        </div>
                      </FormControl>

                      <FormMessage className="flex justify-end font-semibold" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="flex gap-2 sm:gap-4 text-white flex-row flex-wrap">
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLFaceBookLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLMessangerLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLInstagramLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLLinkedInLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLWhatsappLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <TLTelegramLine className="w-5 h-5 sm:w-3.5 sm:h-3.5 lg:w-6 lg:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyle15;
