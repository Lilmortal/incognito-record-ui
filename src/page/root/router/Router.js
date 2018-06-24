import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../../../config/routes";
import BlogPage from "../../blog";
import AboutPage from "../../about";

const Router = () => (
  <Switch>
    <Route path={routes.index} component={BlogPage} exact />
    <Route path={routes.about} component={AboutPage} exact />
    <Redirect to={routes.index} />
  </Switch>
);

export default Router;
