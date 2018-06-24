import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import Navigation from "./Navigation";

storiesOf("Navigation", module)
  .addDecorator(centered)
  .add("default", () => <Navigation />);
