"use client";
import { reviewsBG } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import TLFaceBookLine from "../facebook-line";
import TLInstagramLine from "../instagram-line";
import TLLinkedInLine from "../linkedin-line";
import { Button } from "../ui/button";
import TLWhatsappLine from "../whatsapp-line";
export default function NeedHelpSection() {
  return (
    <div className="md:px-8 px-4 mt-12 relative max-w-screen">
      <div className="mt-12 py-12 rounded-3xl relative w-full h-full">
        <div className="absolute inset-0 w-full rounded-3xl h-full z-[1] bg-[rgba(2,2,2,0.9)]/90"></div>
        <Image
          src={reviewsBG}
          alt="bg"
          className="absolute object-cover object-top z-[-1] inset-0 w-full h-full rounded-3xl opacity-50"
        />
        <div className="flex flex-col justify-center items-center text-white z-10 relative">
          <h1 className="md:text-3xl text-xl md:max-w-lg max-w-xs text-center mb-4">
            Need Help? We&apos;re Always Here to Support You
          </h1>
          <p className="md:max-w-3xl max-w-xs text-center text-sm text-[rgba(181,181,181,1)]">
            Got a question or facing an issue? Whether it&apos;s about booking,
            your account, or anything in between — our team is ready to help
            you, anytime. Reach out and we&apos;ll make sure you&apos;re taken
            care of.
          </p>

          <div className="flex sm:flex-row flex-col items-center gap-y-4 mt-8 gap-x-8">
            <Button className=" inline-flex h-12 cursor-pointer animate-background-shine items-center justify-center rounded-md border bg-white border-gray-800 bg-[linear-gradient(110deg,white,45%,#e2e2e2,55%,white)] bg-[length:200%_100%] px-6 font-medium transition-colors  text-main ">
              Contact Us Now
            </Button>
            <div className="flex flex-row gap-x-2 items-center">
              <Link href={"/"}>
                <TLInstagramLine />
              </Link>
              <Link href={"/"}>
                <TLFaceBookLine />
              </Link>
              <Link href={"/"}>
                <TLLinkedInLine />
              </Link>
              <Link href={"/"}>
                <TLWhatsappLine />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
