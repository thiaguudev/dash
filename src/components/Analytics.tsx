import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Grid,
  Color,
} from "@tremor/react";

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const categories = [
  {
    title: "Responses",
    metric: "198",
    metricPrev: "158",
    delta: "34.3%",
    deltaType: "increase" as DeltaType,
  },
  {
    title: "Promoters",
    metric: "102",
    metricPrev: "83",
    delta: "10.9%",
    deltaType: "moderateDecrease" as DeltaType,
  },
  {
    title: "Neutrals",
    metric: "56",
    metricPrev: "33",
    delta: "25.3%",
    deltaType: "moderateIncrease" as DeltaType,
  },
  {
    title: "Detractors",
    metric: "40",
    metricPrev: "21",
    delta: "34.3%",
    deltaType: "moderateIncrease" as DeltaType,
  },
];

export default function Analytics() {
  return (
    <Grid numItemsSm={4} className="gap-6 w-full">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="start" className="space-x-2 mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text color={colors[item.deltaType] as Color}>{item.delta}</Text>
              <Text className="truncate">to previous month</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
