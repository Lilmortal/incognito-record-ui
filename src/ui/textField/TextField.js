import React from "react";

import createBem from "../../util/createBem";
import "./TextField.scss";

const bem = createBem("incognito-TextField");

const TextField = ({ text, htmlFor, type, placeholder, ...props }) => {
  const renderType = {
    noBorder: "noBorder",
    default: ""
  };

  return (
    <div {...props}>
      <label htmlFor={htmlFor}>
        <span className={bem("label")}>{text}</span>
        <input type="text" className={bem("", renderType[type] || "")} id={htmlFor} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default TextField;
