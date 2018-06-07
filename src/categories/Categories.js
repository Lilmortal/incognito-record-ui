import React from "react";
import { Trail, animated } from "react-spring";

import createBem from "../util/createBem";
import "./Categories.scss";

const bem = createBem("incognito-categories");

export default class Categories extends React.PureComponent {
  state = {
    toggle: false
  };

  handleMouseHover = () => {
    this.setState({ toggle: true });
  };

  handleMouseLeave = () => {
    this.setState({ toggle: false });
  };

  render() {
    const { toggle } = this.state;
    const { categories } = this.props;

    // TODO: Can choose between marginLeft and marginRight
    return (
      <div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        <Trail
          native
          from={{ x: 100, opacity: 0.4 }}
          to={{ x: toggle ? 0 : 100, opacity: toggle ? 1 : 0.4 }}
          keys={categories.map(category => category.key)}
        >
          {categories.map(category => ({ x, opacity }) => (
            <animated.div
              className={bem("category")}
              style={{ opacity, transform: x.interpolate(marginRight => `translateX(${marginRight}%)`) }}
            >
              {category.text}
            </animated.div>
          ))}
        </Trail>
      </div>
    );
  }
}
