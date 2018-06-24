import React from "react";
import { BrowserRouter, withRouter } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import createBem from "../../util/createBem";
import routes from "../../config/routes";
import Intl from "./intl";
import Router from "./router";
import "./Root.scss";

const bem = createBem("incognito-Router");

const Root = ({ history }) => {
  const isHomePage = history.location.pathname === routes.index;

  return (
    <div className={bem()}>
      <Intl>
        <BrowserRouter>
          <Header isHomePage={isHomePage} />
          <Router />
          <div className={bem("footer")}>
            <Footer />
          </div>
        </BrowserRouter>
      </Intl>
    </div>
  );
};

export default withRouter(Root);
