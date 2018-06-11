import React from "react";
import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("incognito-Post");

const Post = ({ post }) => <div className={bem()}>{post}</div>;

export default Post;
