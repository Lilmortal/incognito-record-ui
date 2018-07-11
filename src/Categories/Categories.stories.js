import React from "react";
import { storiesOf } from "@storybook/react";

import Categories from "./Categories";

storiesOf("Categories", module).add("default", () => (
  <Categories
    categories={[{ key: 0, text: "category 1" }, { key: 1, text: "category 2" }, { key: 2, text: "category 3" }]}
  />
));
