import React from "react";

import createBem from "../../util/createBem";
import "./PostImage.scss";

const bem = createBem("incognito-PostImage");

const renderBackgroundImage = {
  docker: "https://s3-ap-southeast-2.amazonaws.com/incognito-record-ui/docker.png",
  flower: "https://s3-ap-southeast-2.amazonaws.com/incognito-record-ui/flower.jpeg"
};

const PostImage = ({ type }) => (
  <div className={bem()} style={{ backgroundImage: `url(${renderBackgroundImage[type]})` }} />
);

export default PostImage;
