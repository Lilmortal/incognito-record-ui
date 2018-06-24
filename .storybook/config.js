import { configure, addDecorator } from "@storybook/react";

import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "babel-polyfill";

import defaultStyleDecorator from "./decorator/defaultStyle";
import memoryRouterDecorator from "./decorator/memoryRouter";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(defaultStyleDecorator);
addDecorator(memoryRouterDecorator);

configure(loadStories, module);
