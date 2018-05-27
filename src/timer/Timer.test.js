import React from "react";
import { shallow } from "enzyme";

import Timer from "./Timer";

describe("Timer", () => {
  it("should render timer", () => {
    const timer = shallow(<Timer />);

    expect(timer.exists()).toEqual(true);
  });
});
