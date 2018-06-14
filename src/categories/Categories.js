import React from "react";
import { Keyframes, config, animated } from "react-spring";

import createBem from "../util/createBem";
import "./Categories.scss";

const bem = createBem("incognito-categories");

const Container = Keyframes.Spring({
  show: {
    to: {
      t: 0
    }
  },
  hide: {
    to: {
      t: 100
    }
  }
})

const Options = Keyframes.Trail({
  show: {
    to: {
      x: 0
    }
  },
  hide: {
    to: {
      x: 100
    }
  }
})

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
      <div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        <Container native state={this.state.toggle ? 'show' : 'hide'}>
          {styles => {
              console.log(styles)
            
              return (
                <animated.div className={bem('categoriesWrapper')} style={{ transform: styles.t.interpolate(marginRight => `translateX(${marginRight}%)`)}}>
                  <Options
                    native
            // from={{ x: 100, opacity: 0.4 }}
            // to={{ x: toggle ? 0 : 100, opacity: toggle ? 1 : 0.4 }}
                    keys={categories.map(category => category.key)}
                    state={this.state.toggle ? 'show' : 'hide'}
                  >
                    {categories.map(category => ({ x }) => {
                      console.log(x);
                      return (
                        <animated.div
                          className={bem("category")}
                          style={{ transform: x.interpolate(marginRight => `translateX(${marginRight}%)`) }}
                        >
                          {category.text}
                        </animated.div>
                      )})}
                  </Options>
                </animated.div>
                )}}
            
        </Container>
      </div>
    );
  }
}
