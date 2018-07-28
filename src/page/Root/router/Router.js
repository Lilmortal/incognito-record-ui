import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../config/routes';
import BlogPage from '../../Blog';
import AboutPage from '../../About';
import AdminPage from '../../Admin';

const Router = () => (
  <Switch>
    <Route path={routes.about} component={AboutPage} exact />
    <Route path={routes.admin} component={AdminPage} exact />
    <Route path={routes.index} component={BlogPage} />
  </Switch>
);

export default Router;
