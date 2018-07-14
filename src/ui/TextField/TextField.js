import React from 'react';
import { injectIntl } from 'react-intl';

import { createBem } from '../../util/bem';
import './TextField.scss';

const bem = createBem('incognito-TextField');

const TextField = ({ label, htmlFor, type, placeholder, intl, ...props }) => {
  const renderType = {
    noBorder: 'noBorder',
    default: ''
  };

  return (
    <div {...props}>
      <label htmlFor={htmlFor}>
        <span className={bem('label')}>{label}</span>
        <input
          type="text"
          className={bem('', renderType[type] || '')}
          id={htmlFor}
          placeholder={placeholder && intl.formatMessage(placeholder)}
        />
      </label>
    </div>
  );
};

export default injectIntl(TextField);
