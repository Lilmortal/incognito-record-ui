import React from "react";
import { Parallax } from "react-spring";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import createBem from "../../util/createBem";
import routes from "../../config/routes";
import BlogPage from "../blog";
import AboutPage from "../about";

import "./Root.scss";

const bem = createBem("incognito-Root");

const ParallaxPage = ({ offset, speed, onClick, children }) => (
  <Parallax.Layer offset={offset} speed={speed} onClick={onClick}>
    {children}
  </Parallax.Layer>
);

class Root extends React.Component {
  get isHomePage() {
    return this.props.history.location.pathname === routes.index;
  }

  scroll = to => this.parallax.scrollTo(to);

  render() {
    return (
      <div className={bem()}>
        <Header isHomePage={this.isHomePage} />
        <Parallax
          ref={parallax => {
            this.parallax = parallax;
          }}
          pages={2}
          horizontal
          scrolling={false}
          className={bem("parallaxContainer")}
        >
          <Switch>
            <Route
              path={routes.about}
              render={() => (
                <ParallaxPage offset={1} speed={0.2}>
                  <AboutPage />
                </ParallaxPage>
              )}
              exact
            />
            <Route
              path={routes.index}
              render={() => (
                <ParallaxPage offset={0} speed={0.2}>
                  <BlogPage />
                </ParallaxPage>
              )}
            />
          </Switch>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Root);
