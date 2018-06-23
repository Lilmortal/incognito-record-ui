import React from "react";

import createBem from "../util/createBem";
import "./Spinner.scss";

const bem = createBem("incognito-Spinner");

const Spinner = ({ children }) => <div className={bem()}>{children}</div>;

export default Spinner;
