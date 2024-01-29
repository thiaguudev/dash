"use client";

import React from "react";
import { Button, Flex, Icon, Text } from "@tremor/react";
import { SearchIcon, BellIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function UserNav() {
  return (
    <Flex justifyContent="end" className="gap-3 p-5">
      {/* <Icon icon={SearchIcon} size="lg" className="text-#7C8DB5" />
      <Icon icon={BellIcon} size="lg" className="text-#7C8DB5" />
      <Image src="/avatar.png" alt="" width={32} height={32} />
      <Text className="text-xl">Yara Summers</Text> */}
      <Button size="xl" className="w-[152px] text-xl">
        Export CSV
      </Button>
    </Flex>
  );
}
