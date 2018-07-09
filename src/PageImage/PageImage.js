import React from "react";
import { withRouter } from "react-router-dom";

import routes from "../config/routes";
import Header from "./header";
import createBem from "../util/createBem";

import "./PageImage.scss";

const bem = createBem("incognito-PageImage");

const PageImage = ({ image, history }) => {
  const isHomePage = history.location.pathname === routes.index;

  return (
    <div className={bem("", `is${image}`)}>
      <Header isHomePage={isHomePage} />
    </div>
  );
};

export default withRouter(PageImage);
