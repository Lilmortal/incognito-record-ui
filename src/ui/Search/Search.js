import React from 'react';
import { FormattedMessage } from 'react-intl';

import { createBem } from '../../util/bem';
import TextField from '../TextField';

import messages from './Search.messages';
import './Search.scss';

const bem = createBem('incognito-Search');

const Search = ({ id }) => (
  <div className={bem()}>
    <TextField
      htmlFor={id}
      label={<FormattedMessage {...messages.label} />}
      className={bem('searchField')}
      type="noBorder"
      placeholder={{ ...messages.placeholder }}
    />
    <div className={bem('searchIcon')} />
  </div>
);

export default Search;
