import React from 'react';
import { injectIntl } from 'react-intl';

import { createBem } from '../../util/bem';
import './TextArea.scss';

const bem = createBem('incognito-TextArea');

const TextArea = ({ label, htmlFor, placeholder, intl, ...props }) => (
  <div className={bem()} {...props}>
    <label htmlFor={htmlFor} className={bem('textAreaWrapper')}>
      <span className={bem('label')}>{label}</span>
      <textarea className={bem('textArea')} id={htmlFor} placeholder={placeholder && intl.formatMessage(placeholder)} />
    </label>
  </div>
);

export default injectIntl(TextArea);
