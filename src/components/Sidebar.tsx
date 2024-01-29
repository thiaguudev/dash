"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Dialog, DialogPanel, Icon, Title } from "@tremor/react";
import {
  CogIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-w-[281px] md:flex flex-col justify-between min-h-screen py-[72px] pl-14 pr-9 text-xl hidden">
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <Title className="mb-3">Confirm Sign Out?</Title>
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
          <div className="flex justify-end gap-3 mt-3">
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
      <Image src="/logo.png" alt="" width={87} height={30} />
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
            <Link
              href=""
              className="flex items-center"
              onClick={() => setIsOpen(true)}
            >
              <Icon size="lg" icon={ArrowSmLeftIcon} className="text-#7C8DB5" />{" "}
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
