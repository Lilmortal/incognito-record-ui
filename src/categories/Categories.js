import React from "react";
import { Trail } from "react-spring";

import createBem from "../util/createBem";
import "./Categories.scss";

const bem = createBem("incognito-categories");

export default class Categories extends React.Component {
  state = {
    hovered: false
  };

  handleMouseHover = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { hovered } = this.state;
    const { categories } = this.props;

    // TODO: Can choose between marginLeft and marginRight
    return (
      <div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        {
          <Trail
            from={{ opacity: 0, marginRight: -100 }}
            to={{ opacity: hovered ? 1 : 0.5, marginRight: hovered ? 100 : 0 }}
            keys={categories.map(category => category.key)}
          >
            {categories.map(category => styles => (
              <div className={bem("category")} style={styles}>
                {category.text}
              </div>
            ))}
          </Trail>
        }
      </div>
    );
  }
}
