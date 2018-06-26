import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../../../config/routes";
import BlogPage from "../../blog";
import AboutPage from "../../about";

const Router = () => (
  <Switch>
    <Route path={routes.about} component={AboutPage} exact />
    <Route path={routes.index} component={BlogPage} />
  </Switch>
);

export default Router;
