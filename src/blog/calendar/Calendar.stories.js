import React from "react";
import { storiesOf } from "@storybook/react";

import Calendar from "./Calendar";

storiesOf("Calendar", module).add("default", () => <Calendar date={0} />);
