import React from "react";
import moment from "moment";
import { shallow } from "enzyme";

import Post from "./Post";

let defaultProps;

beforeEach(() => {
  defaultProps = {
    title: "title",
    post: "post",
    ariaLabelledby: "aria-labelled-by",
    date: moment(),
    image: "docker",
    onPostHover: jest.fn()
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

const renderShallow = props => shallow(<Post {...defaultProps} {...props} />);

describe("mouse handling", () => {
  it("should fire onPostHover on mouse enter", () => {
    const post = renderShallow();
    post.find(".incognito-Post").prop("onMouseEnter")();

    expect(defaultProps.onPostHover).toBeCalled();
  });
});
