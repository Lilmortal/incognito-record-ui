import React from "react";
import { Transition, animated } from "react-spring";
import moment from "moment";

import createBem from "../../util/createBem";
import "./Calendar.scss";

const bem = createBem("wifi-Calendar");

const CONTAINER_SPACES = 3;

let months = [
  { month: "JAN", id: 0 },
  { month: "FEB", id: 1 },
  { month: "MAR", id: 2 },
  { month: "APR", id: 3 },
  { month: "MAY", id: 4 },
  { month: "JUN", id: 5 },
  { month: "JUL", id: 6 },
  { month: "AUG", id: 7 },
  { month: "SEP", id: 8 },
  { month: "OCT", id: 9 },
  { month: "NOV", id: 10 },
  { month: "DEC", id: 11 }
];
months = months.map(monthDetails => (
  <span className={bem("month")} key={monthDetails.id}>
    {monthDetails.month}
  </span>
));

const dates = [];
for (let i = 1; i <= 31; i += 1) {
  dates.push(
    <span className={bem("date")} key={i}>
      {i}
    </span>
  );
}

export default class Calendar extends React.PureComponent {
  state = {
    loaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  componentDidUpdate() {
    this.prevDate = this.currentDate;
    this.prevMonth = this.currentMonth;
    this.prevYear = this.currentYear;
  }

  get currentDate() {
    return moment(this.props.date).date();
  }

  get currentMonth() {
    return moment(this.props.date).month();
  }

  get currentYear() {
    return moment(this.props.date).year();
  }

  get prevDateLocation() {
    // TODO: Why do I have to minus 1 CONTAINER_SPACES here to get it working
    return CONTAINER_SPACES * (this.prevDate || 0) - CONTAINER_SPACES;
  }

  get currentDateLocation() {
    return CONTAINER_SPACES * (this.currentDate || 0) - CONTAINER_SPACES;
  }

  get prevMonthLocation() {
    return CONTAINER_SPACES * (this.prevMonth || 0);
  }

  get currentMonthLocation() {
    return CONTAINER_SPACES * (this.currentMonth || 0);
  }

  get isCurrentDateChanged() {
    return this.prevDate !== this.currentDate;
  }

  get isCurrentMonthChanged() {
    return this.prevMonth !== this.currentMonth;
  }

  get isCurrentYearChanged() {
    return this.prevYear !== this.currentYear;
  }

  render() {
    return (
      <div className={bem()}>
        <Transition
          native
          from={{ opacity: this.isCurrentYearChanged ? 0 : 1 }}
          enter={{ opacity: 1 }}
          keys={this.currentYear}
        >
          {({ opacity }) => (
            <animated.div className={bem("years")} style={{ opacity }}>
              {this.currentYear}
            </animated.div>
          )}
        </Transition>
        <Transition
          native
          from={{
            borderLength: this.state.loaded ? 200 : 0,
            dateLongitude: this.prevDateLocation,
            monthLongitude: this.prevMonthLocation
          }}
          enter={{
            borderLength: 200,
            dateLongitude: this.currentDateLocation,
            monthLongitude: this.currentMonthLocation
          }}
          keys={this.currentDate + this.currentMonth}
        >
          {({ borderLength, dateLongitude, monthLongitude }) => (
            <div className={bem("dateSlider")}>
              <animated.div
                className={bem("dateSliderBorderTop")}
                style={{
                  borderTop: borderLength.interpolate(length => `${length}px solid black`)
                }}
              />
              <div className={bem("monthsWrapper")}>
                <animated.div
                  className={bem("months")}
                  style={{ transform: monthLongitude.interpolate(pos => `translateY(-${pos}em`) }}
                >
                  {months}
                </animated.div>
              </div>
              <div className={bem("datesWrapper")}>
                <animated.div
                  className={bem("dates")}
                  style={{
                    transform: dateLongitude.interpolate(pos => `translateY(-${pos}em)`)
                  }}
                >
                  {dates}
                </animated.div>
              </div>
              <animated.div
                className={bem("dateSliderBorderBottom")}
                style={{
                  borderBottom: borderLength.interpolate(length => `${length}px solid black`)
                }}
              />
            </div>
          )}
        </Transition>
      </div>
    );
  }
}
