import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import createBem from "../../util/createBem";
import { BLOG_PAGE_ROUTE, ABOUT_PAGE_ROUTE } from "../../config/routes";
import BlogPage from "../blog";
import AboutPage from "../about";

import "./Root.scss";

const bem = createBem("incognito-Root");

const Root = ({ history }) => {
  const isHomePage = history.location.pathname === BLOG_PAGE_ROUTE;

  return (
    <div className={bem()}>
      <Header isHomePage={isHomePage} />
      <Switch>
        <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} exact />
        <Route path={BLOG_PAGE_ROUTE} component={BlogPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(Root);
