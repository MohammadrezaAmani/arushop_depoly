"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTPDemo } from "./otp";
import { redirect } from "next/navigation";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isOtp, setIsOtP] = React.useState<number>(0);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (isOtp === 0) {
      setIsOtP(1);
    } else if (isOtp === 1) {
      setIsOtP(4);
    }
    //  else if (isOtp === 2) {
    //   setIsOtP(3);
    // else if (isOtp === 3) {
    //   setIsOtP(4);
    // }
    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 100);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            {isOtp === 0 && (
              <Label htmlFor="phone" className="text-sm">
                تلفن همراه
              </Label>
            )}
            {isOtp === 0 && (
              <Input
                id="phone"
                type="tel"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                required
                disabled={isLoading}
              />
            )}
            {isOtp === 1 && (
              <Label htmlFor="otp" className="text-sm">
                کد ارسالی
              </Label>
            )}
            {isOtp === 1 && <InputOTPDemo />}
            {/* {isOtp === 2 && (
              <Label htmlFor="password" className="text-sm">
                رمز عبور
              </Label>
            )}
            {isOtp === 2 && (
              <Input
                id="password"
                type="password"
                placeholder="رمز عبور"
                required
                disabled={isLoading}
              />
            )} */}
            {/* {isOtp === 3 && (
              <Label htmlFor="password" className="text-sm">
                تکرار رمز عبور
              </Label>
            )}
            {isOtp === 3 && (
              <Input
                id="password"
                type="password"
                placeholder="تکرار رمز عبور"
                required
                disabled={isLoading}
              />
            )} */}
            {/* TODO: // if there is backUri in the query string, redirect to that path
            // else redirect to the home page */}
            {isOtp === 4 && redirect("/")}
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            ادامه
          </Button>
        </div>
      </form>
    </div>
  );
}
