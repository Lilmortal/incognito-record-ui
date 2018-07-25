import React from 'react';
import { Transition, animated } from 'react-spring';
import moment from 'moment';

import { createBem } from '../util/bem';
import './Calendar.scss';

const bem = createBem('incognito-Calendar');

const CONTAINER_SPACES_IN_EM = 3;

let months = [
  { month: 'JAN', id: 0 },
  { month: 'FEB', id: 1 },
  { month: 'MAR', id: 2 },
  { month: 'APR', id: 3 },
  { month: 'MAY', id: 4 },
  { month: 'JUN', id: 5 },
  { month: 'JUL', id: 6 },
  { month: 'AUG', id: 7 },
  { month: 'SEP', id: 8 },
  { month: 'OCT', id: 9 },
  { month: 'NOV', id: 10 },
  { month: 'DEC', id: 11 }
];

months = months.map(monthDetails => (
  <span className={bem('month')} key={monthDetails.id}>
    {monthDetails.month}
  </span>
));

const dates = [];
for (let i = 1; i <= 31; i += 1) {
  dates.push(
    <span className={bem('date')} key={i}>
      {i}
    </span>
  );
}

export default class Calendar extends React.Component {
  componentDidUpdate() {
    this.prevDate = this.currentDate;
    this.prevMonth = this.currentMonth;
    this.prevYear = this.currentYear;
  }

  get currentDate() {
    // moment.js months are zero indexed, but dates are not.
    // To keep this consistent, we will keep our dates as zero indexed.
    return moment(this.props.date).date() - 1;
  }

  get currentMonth() {
    return moment(this.props.date).month();
  }

  get currentMonthInText() {
    return moment(this.props.date).format('MMM');
  }

  get currentYear() {
    return moment(this.props.date).year();
  }

  get prevDateLocation() {
    return CONTAINER_SPACES_IN_EM * (this.prevDate || 0);
  }

  get currentDateLocation() {
    return CONTAINER_SPACES_IN_EM * (this.currentDate || 0);
  }

  get prevMonthLocation() {
    return CONTAINER_SPACES_IN_EM * (this.prevMonth || 0);
  }

  get currentMonthLocation() {
    return CONTAINER_SPACES_IN_EM * (this.currentMonth || 0);
  }

  get isCurrentYearChanged() {
    return this.prevYear !== this.currentYear;
  }

  render() {
    const { id, className } = this.props;

    return (
      <div
        className={`${bem()} ${className}`}
        aria-label={`${this.currentDate} ${this.currentMonthInText} ${this.currentYear}`}
        id={id}
      >
        <Transition
          native
          from={{ opacity: this.isCurrentYearChanged ? 0.01 : 1 }}
          enter={{ opacity: 1 }}
          keys={this.currentYear}
        >
          {({ opacity }) => (
            <animated.div className={bem('years')} style={{ opacity }} aria-hidden>
              {this.currentYear}
            </animated.div>
          )}
        </Transition>
        <div className={bem('dateSlider')} aria-hidden>
          <div className={bem('dateSliderBorderTop')} />
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
                <div className={bem('monthsContainer')} aria-hidden>
                  <animated.div
                    className={bem('months')}
                    style={{
                      opacity: calendarOpacity,
                      transform: monthPositon.interpolate(pos => `translateY(-${pos}em`)
                    }}
                  >
                    {months}
                  </animated.div>
                </div>
                <div className={bem('datesContainer')} aria-hidden>
                  <animated.div
                    className={bem('dates')}
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
          <div className={bem('dateSliderBorderBottom')} />
        </div>
      </div>
    );
  }
}
