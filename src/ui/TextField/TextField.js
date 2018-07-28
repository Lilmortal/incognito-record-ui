import React from 'react';
import { injectIntl } from 'react-intl';

import { createBem } from '../../util/bem';
import './TextField.scss';

const bem = createBem('incognito-TextField');

const TextField = ({ label, htmlFor, type = 'default', placeholder, intl, ...props }) => {
  const renderType = {
    noBorder: 'noBorder',
    default: 'default'
  };

  return (
    <div className={bem()} {...props}>
      <label htmlFor={htmlFor} className={bem('textFieldWrapper')}>
        <span className={bem('label')}>{label}</span>
        <input
          type="text"
          className={bem('textField', renderType[type] || 'default')}
          id={htmlFor}
          placeholder={placeholder && intl.formatMessage(placeholder)}
        />
      </label>
    </div>
  );
};

export default injectIntl(TextField);
