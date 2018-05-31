import React from "react";
import { addDecorator } from "@storybook/react";

import "./defaultStyle.scss";

const defaultStyleDecorator = storyFn => <div>{storyFn()}</div>;

export default defaultStyleDecorator;
