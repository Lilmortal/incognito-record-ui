import React from 'react';

import { createBem } from '../../util/bem';
import './Button.scss';

const bem = createBem('incognito-Button');

const Button = ({ onClick, className, children, isSelected }) => (
  <button className={`${bem('', isSelected ? 'isSelected' : '')} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
