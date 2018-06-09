import React from "react";
import { storiesOf } from "@storybook/react";

import DateTime from "./DateTime";

storiesOf("DateTime", module).add("default", () => <DateTime date={0} />);
