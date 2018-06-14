import React from "react";

import createBem from "../../util/createBem";
import "./TextField.scss";

const bem = createBem("incognito-TextField");

const TextField = ({ text, htmlFor, ...props }) => (
  <div {...props}>
    <label htmlFor={htmlFor}>
      {text}
      <input type="text" className={bem()} id={htmlFor} />
    </label>
  </div>
);

export default TextField;
