import { Flex } from "@tremor/react";

import Example from "./Example";
import UserNav from "./UserNav";
import LineChartExample from "./LineExample";

export default function Dashboard() {
  return (
    <div className="flex-1">
      <Flex flexDirection="col" className="flex-1 gap-5 px-14 py-[72px]">
        <UserNav />
        <Example />
        <Flex>
          <LineChartExample />
        </Flex>
      </Flex>
    </div>
  );
}
