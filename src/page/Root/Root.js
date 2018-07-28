import React from 'react';
import { withRouter } from 'react-router-dom';

import routes from '../../config/routes';
import Header from '../../Header';
import { createBem } from '../../util/bem';

import RootIntl from './intl';
import Router from './router';
import './Root.scss';

const bem = createBem('incognito-Root');

const Root = ({ history }) => {
  const isAbsolute = history.location.pathname === routes.index || history.location.pathname === routes.admin;
  const showSideBar = history.location.pathname === routes.index;

  return (
    <div className={bem()}>
      <RootIntl>
        <React.Fragment>
          <Header isAbsolute={isAbsolute} showSideBar={showSideBar} />
          <Router />
        </React.Fragment>
      </RootIntl>
    </div>
  );
};

export default withRouter(Root);
