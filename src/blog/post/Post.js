import React from "react";

import createBem from "../../util/createBem";

import Calendar from "../../calendar";
import "./Post.scss";
import DigitalClock from "../../digitalClock";

const bem = createBem("incognito-Post");

export default class Post extends React.Component {
  onPostHover = () => {
    if (this.props.onPostHover) {
      this.props.onPostHover({ date: this.props.date, image: this.props.image });
    }
  };

  render() {
    const { title, post, ariaLabelledby, showCalendar, showDigitalClock } = this.props;

    return (
      <div className={bem()} onMouseEnter={this.onPostHover} aria-labelledby={ariaLabelledby}>
        <h2 className={bem("title")}>{title}</h2>
        <div className={bem("body", showDigitalClock ? "column" : "")}>
          {showCalendar && <Calendar date={this.props.date} />}
          {showDigitalClock && <DigitalClock date={this.props.date} />}
          <div className={bem("post")}>{post}</div>
        </div>
      </div>
    );
  }
}
