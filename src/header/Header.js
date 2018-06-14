import React from "react";

import createBem from "../util/createBem";
import Navigation from "./navigation";
import Navicon from "./navicon";
import "./Header.scss";

const bem = createBem("incognito-header");

const Header = () => (
  <header className={bem()}>
    <Navigation />
    <Navicon />
  </header>
);

export default Header;
