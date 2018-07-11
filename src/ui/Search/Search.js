import React from 'react';

import createBem from '../../util/createBem';
import TextField from '../TextField';
import './Search.scss';

const bem = createBem('incognito-Search');

const Search = ({ id }) => (
  <div className={bem()}>
    <TextField
      htmlFor={id}
      text="Search for post"
      className={bem('searchField')}
      type="noBorder"
      placeholder="What post am I looking for..."
    />
    {/* Maybe we don't need this icon at all, it might break accessibility but it reduces 
      clutter and less work to maintain what it looks like on a very small device */}
    {/* <div className={bem("icon")} /> */}
  </div>
);

export default Search;
