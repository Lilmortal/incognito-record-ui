import React from "react";
import { FormattedMessage } from "react-intl";
import { Keyframes, animated, config } from "react-spring";

import delay from "../util/delay";
import createBem from "../util/createBem";
import Search from "../ui/search";
import messages from "./Categories.messages";
import "./Categories.scss";

const bem = createBem("incognito-Categories");

const Container = Keyframes.Spring({
  show: {
    to: {
      containerXPosition: 0,
      containerOpacity: 1
    }
  },
  hide: async call => {
    await delay(200);
    await call({
      to: {
        containerXPosition: 100,
        containerOpacity: 0
      }
    });
  }
});

const Options = Keyframes.Trail({
  show: async call => {
    await delay(200);
    await call({
      to: {
        optionsXPosition: 0,
        optionsOpacity: 1
      },
      config: config.stiff
    });
  },
  hide: {
    to: {
      optionsXPosition: 400,
      optionsOpacity: 0
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
    const { categories } = this.props;

    return (
      <animated.div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        <Container native state={this.state.toggle ? "show" : "hide"}>
          {({ containerXPosition, containerOpacity }) => (
            <animated.div
              className={bem("categoriesWrapper")}
              style={{
                opacity: containerOpacity,
                transform: containerXPosition.interpolate(x => `translateX(${x}%)`)
              }}
            >
              <Search id="categorySearch" />
              <h2 className={bem("categoriesLabel")}>
                <FormattedMessage {...messages.label} />
              </h2>
              <Options
                native
                keys={categories.map(category => category.key)}
                state={this.state.toggle ? "show" : "hide"}
              >
                {categories.map(category => ({ optionsXPosition, optionsOpacity }) => (
                  <animated.div
                    className={bem("category")}
                    style={{
                      opacity: optionsOpacity,
                      transform: optionsXPosition.interpolate(x => `translateX(${x}%)`)
                    }}
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
