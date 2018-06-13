import React from "react";
import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

export default class Post extends React.Component {
  onPostHover = () => {
    this.props.onPostHover(this.props.post.date);
  };

  render() {
    const { post } = this.props;

    return (
      <div className={bem()} onMouseEnter={this.onPostHover}>
        {post.post}
      </div>
    );
  }
}
