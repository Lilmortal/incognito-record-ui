import React from 'react';

import TextField from '../../ui/TextField';
import { combineClassNames, createBem } from '../../util/bem';

import './LoginPanel.scss';
import Button from '../../ui/Button';

const bem = createBem('sar-LoginPanel');

const mapCodeToMessage = {
  loginFailure: 'You have failed to login.'
};

const LoginPanel = ({ className, messageCode }) => (
  <div className={combineClassNames(bem(), className)}>
    <div className={bem('panel')}>
      <h1>Login</h1>
      <div className={bem('message')}>{mapCodeToMessage[messageCode]}</div>
      <TextField label="Username" htmlFor="username" />
      <TextField label="Password" htmlFor="password" />
      <div className={bem('submission')}>
        <Button>Login</Button>
      </div>
    </div>
  </div>
);

export default LoginPanel;
