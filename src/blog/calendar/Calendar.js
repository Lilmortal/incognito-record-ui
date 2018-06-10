import React from "react";
import { Transition, animated } from "react-spring";
import moment from "moment";

import createBem from "../../util/createBem";
import "./Calendar.scss";

const bem = createBem("wifi-Calendar");

const BLOCK = 3;

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
    return moment(this.props.fullDate).date();
  }

  get currentMonth() {
    return moment(this.props.fullDate).month();
  }

  get currentYear() {
    return moment(this.props.fullDate).year();
  }

  get prevDateLocation() {
    return BLOCK * (this.prevDate || 0) - BLOCK;
  }

  get currentDateLocation() {
    return BLOCK * (this.currentDate || 0) - BLOCK;
  }

  get prevMonthLocation() {
    return BLOCK * (this.prevMonth || 0);
  }

  get currentMonthLocation() {
    return BLOCK * (this.currentMonth || 0);
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
    console.log(this.props.fullDate);
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
            y: this.prevDateLocation,
            monthY: this.prevMonthLocation
          }}
          enter={{ borderLength: 200, y: this.currentDateLocation, monthY: this.currentMonthLocation }}
          keys={this.currentDate + this.currentMonth}
        >
          {({ borderLength, y, monthY }) => (
            <div className={bem("dateMonth")}>
              <animated.div
                className={bem("borderTop")}
                style={{
                  borderTop: borderLength.interpolate(length => `${length}px solid black`)
                }}
              />
              <div className={bem("monthsBody")}>
                <animated.div
                  className={bem("months")}
                  style={{ transform: monthY.interpolate(pos => `translateY(-${pos}em`) }}
                >
                  {months}
                </animated.div>
              </div>
              <div className={bem("datesBody")}>
                <animated.div
                  className={bem("dates")}
                  style={{
                    transform: y.interpolate(pos => `translateY(-${pos}em)`)
                  }}
                >
                  {dates}
                </animated.div>
              </div>
              <animated.div
                className={bem("borderBottom")}
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
