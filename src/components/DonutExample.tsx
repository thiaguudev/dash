"use client";

import React from "react";
import { Card, DonutChart, Text, Title } from "@tremor/react";

const cities = [
  {
    name: "Neutrals",
    sales: 112,
  },
  {
    name: "Detractors",
    sales: 85,
  },
  {
    name: "Promoters",
    sales: 101,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export function DonutExample() {
  return (
    <Card className="flex flex-col h-full gap-5">
      <Title className="text-3xl font-bold">Geral</Title>
      <DonutChart
        className="my-6"
        data={cities}
        showLabel={true}
        category="sales"
        index="name"
        variant="donut"
        label="298 responses"
        colors={["gray", "red", "emerald"]}
      />
      <Text className="text-5xl font-bold text-center">78%</Text>
    </Card>
  );
}
