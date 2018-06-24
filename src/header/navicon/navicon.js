import React from "react";

import createBem from "../../util/createBem";
import "./Navicon.scss";

const bem = createBem("incognito-Navicon");

const Navicon = () => <div className={bem()} />;

export default Navicon;
