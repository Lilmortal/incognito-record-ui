import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import centered from "@storybook/addon-centered";

import Content from "./Content";

storiesOf("Content", module)
  .addDecorator(centered)
  .add("default", () => (
    <Content title="Title" onRefObserve={action("content-ref-observe")}>
      <div>content</div>
    </Content>
  ));
