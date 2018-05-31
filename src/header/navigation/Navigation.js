import React from "react";

import createBem from "../../util/createBem";
import "./Navigation.scss";

const bem = createBem("incognito-navigation");

const Navigation = () => (
  <nav className={bem()}>
    <ul className={bem("links")}>
      <li>
        <a href="aaaa">Blog</a>
      </li>
      <li>
        <a href="test">About</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
