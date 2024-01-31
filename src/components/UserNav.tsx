"use client";

import React from "react";
import { Button, Flex } from "@tremor/react";
import { PlusIcon } from "@heroicons/react/outline";

import API from "@/lib/API";

const handleSubscription = async () => {
  try {
    const response = await API.get("/api/stripe");
    window.location.href = response.data.url;
  } catch (error: any) {
    console.log("[ERROR]", error.message);
  }
};

export default function UserNav() {
  return (
    <Flex className="gap-3 sm:p-5 p-2 justify-between items-center sm:justify-end">
      <Button className="w-40 text-5xl" variant="secondary" icon={PlusIcon}>
        Create Survey
      </Button>
      <Button className="w-40 text-5xl">Export CSV</Button>
      <Button
        onClick={handleSubscription}
        className="w-40 text-5xl"
        variant="light"
      >
        Subscription
      </Button>
    </Flex>
  );
}
