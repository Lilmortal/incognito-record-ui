/* global __DEV__ */

import React from "react";
import ReactDOM from "react-dom";

import Root from "./page/root";

const Index = () => <Root />;

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("Currently running in DEV mode.");
}

ReactDOM.render(<Index />, document.getElementById("index"));
