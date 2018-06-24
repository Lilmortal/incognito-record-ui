import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import Search from "./Search";

storiesOf("Search", module)
  .addDecorator(centered)
  .add("default", () => <Search id="storybook-search" />);
