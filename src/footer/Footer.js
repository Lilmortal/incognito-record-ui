import React from 'react';

import Timer from './Timer';

import createBem from '../util/createBem';
import './Footer.scss';

const bem = createBem('incognito-Footer');

const Footer = () => (
  <div className={bem()}>
    <Timer />
  </div>
);

export default Footer;
