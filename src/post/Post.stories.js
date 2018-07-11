import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import Post from "./Post";

storiesOf("Post", module)
  .addDecorator(centered)
  .add("default", () => <Post title="Title" post="Post" />);
