import React from "react";

const withBreakpoints = Component =>
  class BreakpointHOC extends React.Component {
    state = {
      breakpoints: ""
    };

    componentDidMount() {
      let timer;
      window.onresize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.onDetermineBreakpoints();
        }, 250);
      };

      this.onDetermineBreakpoints();
    }

    onDetermineBreakpoints = () => {
      if (window.matchMedia("screen and (min-width: 900px)").matches) {
        this.setState({ breakpoints: "lg" });
      } else {
        this.setState({ breakpoints: "sm" });
      }
    };

    render() {
      return <Component breakpoints={this.state.breakpoints} />;
    }
  };

export default withBreakpoints;
