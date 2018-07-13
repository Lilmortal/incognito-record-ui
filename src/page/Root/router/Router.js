import React from "react";
import { Route, Switch } from "react-router-dom";
import { Transition, animated } from "react-spring";

import routes from "../../../config/routes";
import BlogPage from "../../Blog";
import AboutPage from "../../About";

const Router = () => (
  <Switch>
    <Transition native from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {({ opacity }) => (
        <animated.div style={{ opacity }}>
          <Route path={routes.about} component={AboutPage} exact />
          <Route path={routes.index} component={BlogPage} />
        </animated.div>
      )}
    </Transition>
  </Switch>
);

export default Router;
