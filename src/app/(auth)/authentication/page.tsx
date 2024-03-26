import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "@/app/(auth)/authentication/components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};



export default function AuthenticationPage() {
  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none  lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            ورود | ثبت نام
          </h1>
          <p className="text-sm text-muted-foreground">
            لطفا تلفن همراه خود را وارد کنید.
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          با فشردن کلید ادامه شما{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            قوانین و مقررات
          </Link>{" "}
          و{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            خط مشی و حریم خصوصی
          </Link>{" "}
          ما را پذیرفته اید.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
