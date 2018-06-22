import React from "react";

import createBem from "../../util/createBem";
import TextField from "../textField";
import "./Search.scss";

const bem = createBem("incognito-Search");

const Search = () => (
  <div className={bem()}>
    <TextField htmlFor="search" text="Search for post" className={bem("searchField")} />
    <div className={bem("icon")} />
  </div>
);

export default Search;
