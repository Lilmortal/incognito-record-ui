import React from "react";

import createBem from "../util/createBem";
import "./Content.scss";

const bem = createBem("incognito-Content");

const Content = ({ title, children, onRefObserve }) => (
  <div className={bem()}>
    <div className={bem("titleWrapper")}>
      <h2 className={bem("title")} ref={onRefObserve}>
        {title}
      </h2>
    </div>
    <div className={bem("body")}>{children}</div>
  </div>
);

export default Content;
