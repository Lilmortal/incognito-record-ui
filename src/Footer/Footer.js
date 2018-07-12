import React from "react";

import Timer from "./Timer";

import { createBem } from "../util/bem";
import "./Footer.scss";

const bem = createBem("incognito-Footer");

const Footer = () => (
  <div className={bem()}>
    <Timer />
  </div>
);

export default Footer;
