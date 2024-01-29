"use client";

import React from "react";
import { Button, Flex } from "@tremor/react";

export default function UserNav() {
  return (
    <Flex justifyContent="end" className="gap-3 p-5">
      <Button size="xl" className="w-[152px] text-xl">
        Export CSV
      </Button>
    </Flex>
  );
}
