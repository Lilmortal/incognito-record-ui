import React from "react";

import Footer from "../../footer";
import createBem from "../../util/createBem";

import RootIntl from "./intl";
import Router from "./router";
import "./Root.scss";

const bem = createBem("incognito-Root");

const Root = () => (
  <div className={bem()}>
    <RootIntl>
      <React.Fragment>
        <Router />
        <div className={bem("footer")}>
          <Footer />
        </div>
      </React.Fragment>
    </RootIntl>
  </div>
);

export default Root;
