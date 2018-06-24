import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";

import DigitalClock from "./DigitalClock";

storiesOf("DigitalClock", module).add("default", () => <DigitalClock date={moment()} />);
