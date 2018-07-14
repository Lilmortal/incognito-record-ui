/* global __DEV__ */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./page/Root";

const Index = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("Currently running in DEV mode.");
}

ReactDOM.render(<Index />, document.getElementById("index"));
