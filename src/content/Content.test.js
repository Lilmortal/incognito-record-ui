import React from "react";
import { shallow } from "enzyme";

import Content from "./Content";

let defaultProps;

beforeEach(() => {
  defaultProps = {
    title: "title",
    onRefObserve: jest.fn(),
    isIntersecting: false
  };
});

const renderShallow = props => shallow(<Content {...defaultProps} {...props} />);

it("should append isIntersecting class name if it is intersected", () => {
  const content = renderShallow({ isIntersecting: true });

  expect(content.find(".incognito-Content__title").prop("className")).toContain(
    "incognito-Content__title--isIntersecting"
  );

  // TODO: How to test ref
});
