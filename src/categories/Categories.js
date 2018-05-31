import React from "react";

import createBem from "../util/createBem";
import "./Categories.scss";

const bem = createBem("incognito-categories");

const Categories = () => (
  <div className={bem()}>
    <div className={bem("rope")} />
  </div>
);

export default Categories;
