import React from "react";

import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

export default class Post extends React.Component {
  onPostHover = () => {
    this.props.onPostHover({ date: this.props.date, image: this.props.image });
  };

  render() {
    const { title, post, ...otherProps } = this.props;

    return (
      <div className={bem()} onMouseEnter={this.onPostHover} {...otherProps}>
        <h2 className={bem("title")}>{title}</h2>
        <div className={bem("post")}>{post}</div>
      </div>
    );
  }
}
