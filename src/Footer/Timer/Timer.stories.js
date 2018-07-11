import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import Timer from "./Timer";

storiesOf("Timer", module)
  .addDecorator(centered)
  .add("current time", () => <Timer initialDateTime={new Date()} />)
  .add("started at 31/07/2011 23:59:30", () => <Timer initialDateTime={new Date(Date.parse("2011-07-31T23:59:30"))} />);
