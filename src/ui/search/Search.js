import React from "react";

import createBem from "../../util/createBem";
import TextField from "../textField";
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
    <div className={bem("icon")} />
  </div>
);

export default Search;
