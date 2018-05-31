import { configure, addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import defaultStyleDecorator from "./decorator/defaultStyle";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(centered);
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(defaultStyleDecorator);

configure(loadStories, module);
