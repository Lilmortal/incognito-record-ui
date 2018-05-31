import React from "react";
import { shallow } from "enzyme";

import Timer from "./Timer";

let defaultProps;
beforeEach(() => {
  defaultProps = {
    initialDateTime: new Date(Date.parse("2011-07-31T23:59:30"))
  };
});

const renderShallow = props => shallow(<Timer {...defaultProps} {...props} />);

// TODO: How to test this!
describe("Timer", () => {
  it("should render timer with the correct locale date string", async () => {
    jest.useFakeTimers();
    const timer = await renderShallow();

    await setTimeout(async () => {
      timer.update();
      await expect(timer.find("incognito-timer__timer").text()).toEqual(defaultProps.initialDateTime);
    }, 1000);
    // jest.runAllTimers();
  });
});
