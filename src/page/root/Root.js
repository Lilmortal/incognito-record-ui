import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import createBem from "../../util/createBem";
import routes from "../../config/routes";
import RootIntl from "./intl";
import Router from "./router";
import "./Root.scss";

const bem = createBem("incognito-Root");

const Root = ({ history }) => {
  const isHomePage = history.location.pathname === routes.index;

  return (
    <div className={bem()}>
      <RootIntl>
        <React.Fragment>
          <Header isHomePage={isHomePage} />
          <Router />
          <div className={bem("footer")}>
            <Footer />
          </div>
        </React.Fragment>
      </RootIntl>
    </div>
  );
};

export default withRouter(Root);
