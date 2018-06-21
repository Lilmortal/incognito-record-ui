import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from '../../header';
import Footer from '../../footer';
import createBem from '../../util/createBem';
import routes from '../../config/routes';
import BlogPage from '../blog';
import AboutPage from '../about';

import './Root.scss';

const bem = createBem('incognito-Root');

const Root = ({ history }) => {
  const isHomePage = history.location.pathname === routes.index;

  return (
    <div className={bem()}>
      <Header isHomePage={isHomePage} />
      <Switch>
        <Route path={routes.about} component={AboutPage} />
        <Route path={routes.index} component={BlogPage} />
      </Switch> 
      <Footer />
    </div>
  );
};

export default withRouter(Root);
