import React from "react";

import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

export default class Post extends React.Component {
  onPostHover = () => {
    this.props.onPostHover({ date: this.props.date, image: this.props.image });
  };

  render() {
    const { title, post, ariaLabelledby } = this.props;

    return (
      <div
        role="button"
        tabIndex={0}
        className={bem()}
        onMouseEnter={this.onPostHover}
        onClick={this.onPostHover}
        onKeyPress={this.onPostHover}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaLabelledby}
      >
        <h2 className={bem("title")}>{title}</h2>
        <div className={bem("post")}>{post}</div>
      </div>
    );
  }
}
