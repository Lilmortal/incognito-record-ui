import React from "react";

import createBem from "../../util/createBem";
import "./About.scss";

const bem = createBem("incognito-About");

const About = () => <div className={bem()}>About</div>;

export default About;
