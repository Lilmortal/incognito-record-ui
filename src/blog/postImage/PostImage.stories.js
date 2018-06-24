import React from "react";
import { storiesOf } from "@storybook/react";

import PostImage from "./PostImage";

storiesOf("PostImage", module)
  .add("docker image", () => <PostImage type="docker" />)
  .add("flower image", () => <PostImage type="flower" />);
