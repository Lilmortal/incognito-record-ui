/* global __DEV__ */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import createBem from "./util/createBem";
import Root from "./page/root";

import "./index.scss";

const bem = createBem("incognito");

const Index = () => (
  <BrowserRouter>
    <div className={bem()}>
      <Root />
    </div>
  </BrowserRouter>
);

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("Currently running in DEV mode.");
}
ReactDOM.render(<Index />, document.getElementById("index"));
