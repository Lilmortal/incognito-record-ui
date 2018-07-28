import React from 'react';

import { createBem } from '../util/bem';

import LoginPanel from './LoginPanel';
import AdminPanel from './AdminPanel';

// import messages from './Admin.messages';
import './Admin.scss';

const bem = createBem('incognito-Admin');

const Admin = ({ isLoggedIn }) => (
  <div className={bem()}>
    <div className={bem('background')} />
    <div className={bem('panelWrapper')}>
      {!isLoggedIn ? <LoginPanel className={bem('panel')} /> : <AdminPanel className={bem('panel')} />}
    </div>
  </div>
);

export default Admin;
