import React from "react";
import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

const Post = ({ post, isBeingViewed }) => <div className={bem("", isBeingViewed ? "view" : "")}>{post}</div>;

export default Post;
