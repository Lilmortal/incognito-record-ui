import React from "react";

import { createBem } from "../util/bem";

import "./PageImage.scss";

const bem = createBem("incognito-PageImage");

const PageImage = ({ image }) => (
  <React.Fragment>
    <div className={bem("", `is${image}`)} />
  </React.Fragment>
);

export default PageImage;
