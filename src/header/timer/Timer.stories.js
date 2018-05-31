import React from "react";
import { storiesOf } from "@storybook/react";

import Timer from "./Timer";

storiesOf("Timer", module)
  .add("current time", () => <Timer initialDateTime={new Date()} />)
  .add("started at 31/07/2011 23:59:30", () => <Timer initialDateTime={new Date(Date.parse("2011-07-31T23:59:30"))} />);
