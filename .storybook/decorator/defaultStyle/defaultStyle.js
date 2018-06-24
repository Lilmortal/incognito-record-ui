import React from "react";
import { addDecorator } from "@storybook/react";

import "./defaultStyle.scss";

const defaultStyleDecorator = storyFn => storyFn();

export default defaultStyleDecorator;
