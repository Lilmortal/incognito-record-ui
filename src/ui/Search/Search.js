import React from "react";

import { createBem } from "../../util/bem";
import TextField from "../TextField";
import "./Search.scss";

const bem = createBem("incognito-Search");

const Search = ({ id }) => (
  <div className={bem()}>
    <TextField
      htmlFor={id}
      text="Search for post"
      className={bem("searchField")}
      type="noBorder"
      placeholder="What post am I looking for..."
    />
    <div className={bem("searchIcon")} />
  </div>
);

export default Search;
