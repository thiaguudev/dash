"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Switch, TextInput } from "@tremor/react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

import { userCreate, userCreateForm } from "@/lib/constants";

export default function SignIn() {
  const router = useRouter();

  const methods = useForm<userCreate>({
    resolver: zodResolver(userCreateForm),
  });

  const onSubmit: SubmitHandler<userCreate> = async (d) => {
    const response = await signIn("credentials", {
      email: d.email,
      password: d.password,
      redirect: false,
    });

    console.log("[RESPONSE]", response);
    if (!response?.error) return router.push("/");

    toast.error("Email or password incorrectly!");
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="w-full max-w-[456px] grow p-12 flex flex-col gap-3 mx-auto">
          <Image
            src="/logo.svg"
            alt=""
            width={179}
            height={32}
            className="mx-auto sm:mx-0"
          />
          <h2 className="font-semibold text-xl">Nice to see you again</h2>

          <div className="flex flex-col gap-1">
            <label className="text-xs">Login</label>
            <TextInput
              placeholder="Email or phone number"
              {...methods.register("email")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs">Password</label>
            <TextInput
              placeholder="Enter password"
              type="password"
              {...methods.register("password")}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-3">
              <Switch />
              <label className="text-xs">Remember me</label>
            </div>

            <Link href="" className="text-[#007AFF] text-xs">
              Forgot password
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <Button className="text-white bg-[#333] w-full" variant="secondary">
              Or sign in with Google
            </Button>
          </div>

          <div className="text-center text-xs">
            Dont have an account?{" "}
            <Link href="/sign-up" className="text-[#007AFF]">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
