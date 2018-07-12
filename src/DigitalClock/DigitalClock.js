import React from "react";
import moment from "moment";

import { createBem } from "../util/bem";
import "./DigitalClock.scss";

const bem = createBem("incognito-DigitalClock");

export default class DigitalClock extends React.Component {
  get currentDate() {
    return moment(this.props.date).date();
  }

  get currentMonth() {
    return moment(this.props.date).format("MMM");
  }

  get currentYear() {
    return moment(this.props.date).year();
  }

  render() {
    return (
      <div className={bem()} aria-label={`${this.currentDate} ${this.currentMonth} ${this.currentYear}`}>
        <div className={bem("card")} aria-hidden>
          {this.currentDate}
        </div>
        <div className={bem("card")} aria-hidden>
          {this.currentMonth}
        </div>
        <div className={bem("card")} aria-hidden>
          {this.currentYear}
        </div>
      </div>
    );
  }
}
