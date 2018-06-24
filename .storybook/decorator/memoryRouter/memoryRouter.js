import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

const memoryRouterDecorator = storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>;

export default memoryRouterDecorator;
