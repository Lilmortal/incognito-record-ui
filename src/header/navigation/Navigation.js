import React from "react";
import { Link } from "react-router-dom";

import routes from "../../config/routes";
import createBem from "../../util/createBem";
import "./Navigation.scss";

const bem = createBem("incognito-navigation");

const Navigation = () => (
  <nav className={bem()}>
    <ul className={bem("links")}>
      <li>
        <Link to={routes.index}>Blog</Link>
      </li>
      <li>
        <Link to={routes.about}>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
