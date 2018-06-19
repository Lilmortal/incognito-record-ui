import React from "react";
import { Transition, Keyframes, animated, config } from "react-spring";
import moment from "moment";

import delay from "../../util/delay";
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

  get isCurrentYearChanged() {
    return this.prevYear !== this.currentYear;
  }

  BorderContainer = Keyframes.Transition({
    initial: {
      to: {
        borderOpacity: 0.01,
        borderHeight: 0,
        height: 200
      },
      config: config.slow
    },
    show: async call => {
      await delay(1000);
      await call({
        from: {
          borderOpacity: 0.01,
          borderHeight: 0,
          height: 200
        },
        to: {
          borderOpacity: 1,
          borderHeight: this.state.loaded ? 200 : 0.01,
          height: 0
        },
        config: config.slow
      });
    }
  });

  render() {
    return (
      <div className={bem()}>
        <Transition
          native
          from={{ opacity: this.isCurrentYearChanged ? 0.01 : 1 }}
          enter={{ opacity: 1 }}
          keys={this.currentYear}
        >
          {({ opacity }) => (
            <animated.div className={bem("years")} style={{ opacity }}>
              {this.currentYear}
            </animated.div>
          )}
        </Transition>
        <div className={bem("dateSlider")}>
          <this.BorderContainer native state={this.state.loaded ? "show" : "initial"}>
            {({ borderHeight, height, borderOpacity }) => (
              <animated.div
                className={bem("dateSliderBorderTop")}
                style={{
                  opacity: borderOpacity,
                  height: height.interpolate(length => `${length}px`),
                  borderBottom: borderHeight.interpolate(length => `${length}px solid black`)
                }}
              />
            )}
          </this.BorderContainer>
          <Transition
            native
            from={{
              calendarOpacity: 0.01,
              datePosition: this.prevDateLocation,
              monthPositon: this.prevMonthLocation
            }}
            enter={{
              calendarOpacity: 1,
              datePosition: this.currentDateLocation,
              monthPositon: this.currentMonthLocation
            }}
            keys={this.currentDate + this.currentMonth + this.currentYear}
          >
            {({ calendarOpacity, datePosition, monthPositon }) => (
              <React.Fragment>
                <div className={bem("monthsWrapper")}>
                  <animated.div
                    className={bem("months")}
                    style={{
                      opacity: calendarOpacity,
                      transform: monthPositon.interpolate(pos => `translateY(-${pos}em`)
                    }}
                  >
                    {months}
                  </animated.div>
                </div>
                <div className={bem("datesWrapper")}>
                  <animated.div
                    className={bem("dates")}
                    style={{
                      opacity: calendarOpacity,
                      transform: datePosition.interpolate(pos => `translateY(-${pos}em)`)
                    }}
                  >
                    {dates}
                  </animated.div>
                </div>
              </React.Fragment>
            )}
          </Transition>
          <this.BorderContainer native state={this.state.loaded ? "show" : "initial"}>
            {({ borderHeight, height, borderOpacity }) => (
              <animated.div
                className={bem("dateSliderBorderBottom")}
                style={{
                  opacity: borderOpacity,
                  height: height.interpolate(length => `${length}px`),
                  borderTop: borderHeight.interpolate(length => `${length}px solid black`)
                }}
              />
            )}
          </this.BorderContainer>
        </div>
      </div>
    );
  }
}
