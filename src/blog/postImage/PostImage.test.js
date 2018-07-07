import React from "react";
import { shallow } from "enzyme";

import PostImage from "./PostImage";

let defaultProps;

beforeEach(() => {
  defaultProps = {
    type: "docker"
  };
});

const renderShallow = props => shallow(<PostImage {...defaultProps} {...props} />).dive();

describe("Background image render", () => {
  it("should render docker background image", () => {
    const postImage = renderShallow();

    expect(postImage.find(".incognito-PostImage").prop("style").backgroundImage).toEqual(
      "url(https://s3-ap-southeast-2.amazonaws.com/incognito-record-images/docker.png)"
    );
  });

  it("should render flower background image", () => {
    const postImage = renderShallow({ type: "flower" });

    expect(postImage.find(".incognito-PostImage").prop("style").backgroundImage).toEqual(
      "url(https://s3-ap-southeast-2.amazonaws.com/incognito-record-images/flower.jpeg)"
    );
  });
});
