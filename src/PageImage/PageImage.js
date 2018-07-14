import React from 'react';

import { createBem } from '../util/bem';

import './PageImage.scss';

const bem = createBem('incognito-PageImage');

const PageImage = ({ image }) => (
  <div className={bem()}>
    <img alt="page" className={bem('img', `is${image}`)} />
    <div className={bem('div', `is${image}`)} />
  </div>
);

export default PageImage;
