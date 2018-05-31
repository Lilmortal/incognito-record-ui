import React from "react";

import createBem from "../util/createBem";
import Navigation from "./navigation";
import Timer from "./timer";
import "./Header.scss";

const bem = createBem("incognito-header");

const Header = () => (
  <header className={bem()}>
    <Navigation />
    <Timer />
  </header>
);

export default Header;
