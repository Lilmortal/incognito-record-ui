import React from "react";

import Rope from "./rope1.inline.svg";
import createBem from "../util/createBem";
import "./Categories.scss";

const bem = createBem("incognito-categories");

const Categories = () => <Rope className={bem()} />;

export default Categories;
