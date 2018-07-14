import React from 'react';

import { createBem } from '../util/bem';
import './Content.scss';

const bem = createBem('incognito-Content');

const Content = ({ title, children, onRefObserve, id, isIntersecting }) => (
  <div className={bem()}>
    <div className={bem('titleContainer')}>
      <h2 className={bem('title', isIntersecting ? 'isIntersecting' : '')} ref={onRefObserve} id={id}>
        {title}
      </h2>
    </div>
    <div className={bem('body')}>{children}</div>
  </div>
);

export default Content;
