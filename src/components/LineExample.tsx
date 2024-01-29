"use client";

import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    Promoters: 2.04,
    Neutrals: 21.53,
    Detractors: 18,
  },
  {
    year: 1971,
    Promoters: 21.96,
    Neutrals: 2.58,
    Detractors: 14.3,
  },
  {
    year: 1972,
    Promoters: 12,
    Neutrals: 15,
    Detractors: 6,
  },
  {
    year: 1973,
    Promoters: 32,
    Neutrals: 35,
    Detractors: 51,
  },
  {
    year: 1974,
    Promoters: 5,
    Neutrals: 15,
    Detractors: 50,
  },
  {
    year: 1975,
    Promoters: 96,
    Neutrals: 85,
    Detractors: 20,
  },
  {
    year: 1976,
    Promoters: 58,
    Neutrals: 48,
    Detractors: 12,
  },
  {
    year: 1977,
    Promoters: 55,
    Neutrals: 35,
    Detractors: 95,
  },
  {
    year: 1978,
    Promoters: 5,
    Neutrals: 14,
    Detractors: 18,
  },
  {
    year: 1979,
    Promoters: 5,
    Neutrals: 65,
    Detractors: 28,
  },
  {
    year: 1980,
    Promoters: 114,
    Neutrals: 35,
    Detractors: 31,
  },
  {
    year: 1981,
    Promoters: 112,
    Neutrals: 12,
    Detractors: 68,
  },
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

function LineChartExample() {
  return (
    <Card>
      <Title className="text-3xl font-bold">NPS</Title>
      <AreaChart
        className="mt-6"
        data={chartdata}
        index="year"
        categories={["Promoters", "Neutrals", "Detractors"]}
        colors={["emerald", "gray", "red"]}
        valueFormatter={valueFormatter}
        yAxisWidth={40}
        showXAxis={true}
      />
    </Card>
  );
}

export default LineChartExample;
