import React from "react";
import { Transition } from "react-spring";

import createBem from "../../util/createBem";
import "./DateTime.scss";

const bem = createBem("wifi-DateTime");

export default class DateTime extends React.PureComponent {
  state = {
    date: 0
  };

  render() {
    return (
      <div className={bem()}>
        <Transition from={{ borderTop: 0 }} enter={{ borderTop: 200 }} update={{ opacity: 0.5 }}>
          {() => <div className={bem("date")}>{this.state.date}</div>}
        </Transition>
      </div>
    );
  }
}
