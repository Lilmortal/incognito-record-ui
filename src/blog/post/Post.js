import React from "react";
import createBem from "../../util/createBem";

import "./Post.scss";

const bem = createBem("wifi-Post");

const Post = ({ post }) => <div className={bem()}>{post}</div>;

export default Post;
