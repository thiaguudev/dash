"use client";

import React from "react";
import { Card, DonutChart, Title } from "@tremor/react";

const data = [
  { name: "Neutrals", value: 112 },
  { name: "Detractors", value: 85 },
  { name: "Promoters", value: 101 },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export function DonutExample() {
  return (
    <Card className="flex flex-col h-full gap-5">
      <Title className="text-3xl font-bold">Geral</Title>
      <DonutChart
        className="my-6"
        data={data}
        showLabel={true}
        category="value"
        index="name"
        variant="donut"
        label="298 responses"
        colors={["gray", "red", "emerald"]}
      />
      <h1 className="text-5xl font-bold text-center">78%</h1>
    </Card>
  );
}
