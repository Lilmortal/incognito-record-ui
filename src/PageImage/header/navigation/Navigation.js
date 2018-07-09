import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import routes from "../../../config/routes";
import createBem from "../../../util/createBem";
import messages from "./Navigation.messages";
import "./Navigation.scss";

const bem = createBem("incognito-Navigation");

const Navigation = () => (
  <nav className={bem()}>
    <ul className={bem("links")}>
      <li>
        <Link to={routes.index}>
          <FormattedMessage {...messages.index} />
        </Link>
      </li>
      <li>
        <Link to={routes.about}>
          <FormattedMessage {...messages.about} />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
