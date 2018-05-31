/* global __DEV__ */

import React from "react";
import ReactDOM from "react-dom";

import BlogPage from "./page/blog";

import "./Root.scss";

const Index = () => (
  <React.Fragment>
    <BlogPage />
  </React.Fragment>
);

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("Currently running in DEV mode.");
}
ReactDOM.render(<Index />, document.getElementById("index"));
