import React from "react";

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
      <div className={bem()} onMouseEnter={this.onPostHover}>
        {post}
      </div>
    );
  }
}
