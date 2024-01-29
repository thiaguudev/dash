import { Col, Flex, Grid } from "@tremor/react";

import LineChartExample from "./LineExample";
import { DonutExample } from "./DonutExample";
import UserNav from "./UserNav";
import Analytics from "./Analytics";

export default function Dashboard() {
  return (
    <div className="flex-1">
      <Flex
        flexDirection="col"
        className="flex-1 gap-5 px-3 md:px-14 py-[72px]"
      >
        <UserNav />
        <Analytics />
        {/* <Flex className="gap-5"> */}
        <Grid numItems={4} className="gap-6 w-full">
          <Col numColSpan={4} numColSpanSm={3}>
            <LineChartExample />
          </Col>
          <Col numColSpan={4} numColSpanSm={1}>
            <DonutExample />
          </Col>
        </Grid>
        {/* </Flex> */}
      </Flex>
    </div>
  );
}
