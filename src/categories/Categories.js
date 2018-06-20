import React from "react";
import { Keyframes, animated, config } from "react-spring";

import delay from "../util/delay";
import createBem from "../util/createBem";
import TextField from "../ui/textField";
import "./Categories.scss";

const bem = createBem("incognito-categories");

const Container = Keyframes.Spring({
  show: {
    to: {
      t: 0,
      tOpacity: 1
    }
  },
  hide: async call => {
    await delay(200);
    await call({
      to: {
        t: 100,
        tOpacity: 0
      }
    });
  }
});

const Options = Keyframes.Trail({
  show: async call => {
    await delay(200);
    await call({
      to: {
        x: 0,
        opacity: 1
      },
      config: config.stiff
    });
  },
  hide: {
    to: {
      x: 400,
      opacity: 0
    },
    config: config.stiff
  }
});

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
    // const { toggle } = this.state;
    const { categories } = this.props;

    // TODO: Can choose between marginLeft and marginRight
    return (
      <animated.div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        <Container native state={this.state.toggle ? "show" : "hide"}>
          {({ t, tOpacity }) => (
            <animated.div
              className={bem("categoriesWrapper")}
              style={{ opacity: tOpacity, transform: t.interpolate(marginRight => `translateX(${marginRight}%)`) }}
            >
              <TextField htmlFor="search" text="Search for post" className={bem("searchField")} />
              <h2 className={bem("categoriesLabel")}>Recommended search</h2>
              <Options
                native
                keys={categories.map(category => category.key)}
                state={this.state.toggle ? "show" : "hide"}
              >
                {categories.map(category => ({ x, opacity }) => (
                  <animated.div
                    className={bem("category")}
                    style={{ opacity, transform: x.interpolate(marginRight => `translateX(${marginRight}%)`) }}
                  >
                    {category.text}
                  </animated.div>
                ))}
              </Options>
            </animated.div>
          )}
        </Container>
      </animated.div>
    );
  }
}
