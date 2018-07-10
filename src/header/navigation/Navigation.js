import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import routes from "../../config/routes";
import createBem from "../../util/createBem";
import messages from "./Navigation.messages";
import "./Navigation.scss";

const bem = createBem("incognito-Navigation");

const NavigationLink = props => <Link {...props} className={bem("link", props.isHomePage ? "inverse" : "")} />;

const Navigation = ({ isHomePage }) => (
  <nav className={bem()}>
    <ul className={bem("links")}>
      <li>
        <NavigationLink to={routes.index} isHomePage={isHomePage}>
          <FormattedMessage {...messages.index} />
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to={routes.about} isHomePage={isHomePage}>
          <FormattedMessage {...messages.about} />
        </NavigationLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
