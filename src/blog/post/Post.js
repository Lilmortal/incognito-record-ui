import React from "react";
import { Transition, animated } from "react-spring";

import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

export default class Post extends React.Component {
  onPostHover = () => {
    this.props.onPostHover({ date: this.props.date, image: this.props.image });
  };

  render() {
    const { post } = this.props;

    return (
      <Transition native from={{ opacity: 0 }} enter={{ opacity: 1 }}>
        {({ opacity }) => (
          <animated.div className={bem()} onMouseEnter={this.onPostHover} style={{ opacity }}>
            {post}
          </animated.div>
        )}
      </Transition>
    );
  }
}
