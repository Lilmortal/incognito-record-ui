import React from "react";
import { Spring, animated } from "react-spring";

import createBem from "../../util/createBem";
import "./PostImage.scss";

const bem = createBem("incognito-PostImage");

const renderBackgroundImage = {
  docker: "https://s3-ap-southeast-2.amazonaws.com/incognito-record-ui/docker.png",
  flower: "https://s3-ap-southeast-2.amazonaws.com/incognito-record-ui/flower.jpeg"
};

export default class PostImage extends React.Component {
  state = {
    toggle: false
  };

  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { type } = this.props;
    return (
      <Spring native from={{ opacity: 0 }} to={{ opacity: 0.5 }} toggle={this.toggle} reset>
        {({ opacity }) => (
          <animated.div className={bem()} style={{ backgroundImage: `url(${renderBackgroundImage[type]})`, opacity }} />
        )}
      </Spring>
    );
  }
}
