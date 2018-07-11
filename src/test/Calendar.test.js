import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import Calendar from "./Calendar";

let defaultProps;

beforeEach(() => {
  defaultProps = {
    date: moment("25/12/2016", "DD/MM/YYYY")
  };
});

const renderShallow = props => shallow(<Calendar {...defaultProps} {...props} />);

describe("Date functions", () => {
  it("should get current date", () => {
    const calendar = renderShallow();

    // This is expected as we keep dates as zero indexed.
    expect(calendar.instance().currentDate).toEqual(24);
  });
  it("should get current month", () => {
    const calendar = renderShallow();

    // moment.js keeps their month as zero indexed, this is expected.
    expect(calendar.instance().currentMonth).toEqual(11);
  });
  it("should get current month in MMM format", () => {
    const calendar = renderShallow();

    expect(calendar.instance().currentMonthInText).toEqual("Dec");
  });
  it("should get current year", () => {
    const calendar = renderShallow();

    expect(calendar.instance().currentYear).toEqual(2016);
  });
});
