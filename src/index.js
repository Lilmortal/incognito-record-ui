/* global __DEV__ */

import React from "react";
import ReactDOM from "react-dom";

const Index = () => <div>Hello Reacssst!</div>;

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("Currently running in DEV mode.");
}
ReactDOM.render(<Index />, document.getElementById("index"));
