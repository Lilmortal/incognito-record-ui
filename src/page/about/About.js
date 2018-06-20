import React from 'react';
import { Transition, animated } from 'react-spring';

import createBem from '../../util/createBem';
import './About.scss';

const bem = createBem('incognito-About');

const About = () => (
  <Transition native from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {({ opacity }) => (
      <animated.div className={bem()} style={{ opacity }}>
        About
      </animated.div>
    )}
  </Transition>
);

export default About;
