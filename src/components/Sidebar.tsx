"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@tremor/react";
import {
  CogIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="min-w-[281px] md:flex flex-col justify-between min-h-screen py-[72px] pl-14 pr-9 text-xl hidden">
      <Image
        src="/logo.svg"
        alt=""
        width={179}
        height={32}
        className="mx-auto sm:mx-0"
      />
      <nav>
        <ul className="flex flex-col gap-5">
          <li className="font-medium text-[#7C8DB5] flex items-center justify-start gap-2">
            <Link href="" className="flex items-center">
              <Icon size="lg" icon={ChartBarIcon} className="text-#7C8DB5" />{" "}
              Overview
            </Link>
          </li>
          <li className="font-medium text-[#7C8DB5] flex items-center justify-start gap-2">
            <Link href="" className="flex items-center">
              <Icon size="lg" icon={ChatAlt2Icon} className="text-#7C8DB5" />{" "}
              Surveys
            </Link>
          </li>
          <li className="font-medium text-[#7C8DB5] flex items-center justify-start gap-2">
            <Link href="" className="flex items-center">
              <Icon size="lg" icon={CogIcon} className="text-#7C8DB5" />{" "}
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex flex-col gap-5">
          <li className="font-medium text-[#7C8DB5] flex items-center justify-start gap-2">
            <Link href="" className="flex items-center">
              <Icon
                size="lg"
                icon={QuestionMarkCircleIcon}
                className="text-#7C8DB5"
              />
              Help Center
            </Link>
          </li>
          <li className="text-red-700 font-medium flex items-center justify-start gap-2">
            <Link href="/api/auth/signout" className="flex items-center">
              <Icon size="lg" icon={ArrowSmLeftIcon} className="text-#7C8DB5" />{" "}
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
