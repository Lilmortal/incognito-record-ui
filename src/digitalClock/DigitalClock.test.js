import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import DigitalClock from "./DigitalClock";

let defaultProps;

beforeEach(() => {
  defaultProps = {
    date: moment("25/12/2016", "DD/MM/YYYY")
  };
});

const renderShallow = props => shallow(<DigitalClock {...defaultProps} {...props} />);

describe("Date functions", () => {
  it("should get current date", () => {
    const digitalClock = renderShallow();

    expect(digitalClock.instance().currentDate).toEqual(25);
  });
  it("should get current month", () => {
    const digitalClock = renderShallow();

    expect(digitalClock.instance().currentMonth).toEqual("Dec");
  });

  it("should get current year", () => {
    const digitalClock = renderShallow();

    expect(digitalClock.instance().currentYear).toEqual(2016);
  });
});
