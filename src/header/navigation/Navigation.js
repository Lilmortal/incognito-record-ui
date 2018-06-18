import React from "react";
import { Link } from "react-router-dom";

import { BLOG_PAGE_ROUTE, ABOUT_PAGE_ROUTE } from "../../config/routes";
import createBem from "../../util/createBem";
import "./Navigation.scss";

const bem = createBem("incognito-navigation");

const Navigation = () => (
  <nav className={bem()}>
    <ul className={bem("links")}>
      <li>
        <Link to={BLOG_PAGE_ROUTE}>Blog</Link>
      </li>
      <li>
        <Link to={ABOUT_PAGE_ROUTE}>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
