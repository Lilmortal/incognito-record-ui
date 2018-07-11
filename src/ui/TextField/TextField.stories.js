import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered";

import TextField from "./TextField";

storiesOf("TextField", module)
  .addDecorator(centered)
  .add("default", () => <TextField text="Label" htmlFor="storybook-textfield" />)
  .add("with placeholder", () => <TextField placeholder="placeholder" />)
  .add("with no border type", () => (
    <TextField text="Label" htmlFor="storybook-textfield" placeholder="placeholder" type="noBorder" />
  ));
