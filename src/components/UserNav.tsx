"use client";

import React from "react";
import { Button, Flex } from "@tremor/react";
import { PlusIcon } from "@heroicons/react/outline";

export default function UserNav() {
  return (
    <Flex justifyContent="end" className="gap-3 p-5">
      <Button className="w-40 text-5xl" variant="secondary" icon={PlusIcon}>
        Create Survey
      </Button>
      <Button className="w-40 text-5xl">Export CSV</Button>
    </Flex>
  );
}
