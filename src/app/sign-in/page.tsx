"use client";

import { Button, Switch, TextInput } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

export default function SignIn() {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const methods = useForm<z.infer<typeof schema>>();

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (d) => console.log(d);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="flex-3 hidden md:flex">
          <Image src="/login_image.png" alt="" width={984} height={900} />
        </div>
        <div className="w-full max-w-[456px] grow p-12 flex flex-col gap-3 mx-auto">
          <Image src="/logo.png" alt="" width={92} height={48} />
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
            <Link href="" className="text-[#007AFF]">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
