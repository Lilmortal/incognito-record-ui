import React from 'react';

import { createBem } from '../util/bem';

import messages from './Admin.messages';
import './Admin.scss';

const bem = createBem('incognito-Admin');

const Admin = () => <div className={bem()}>Test</div>;

export default Admin;
