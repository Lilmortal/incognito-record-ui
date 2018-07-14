import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Keyframes, animated, config } from 'react-spring';

import delay from '../util/delay';
import { createBem } from '../util/bem';
import Search from '../ui/Search';
import messages from './SideBar.messages';
import './SideBar.scss';

const bem = createBem('incognito-SideBar');

const OptionsContainer = Keyframes.Spring({
  show: {
    to: {
      containerXPosition: 0,
      containerOpacity: 1
    }
  },
  hide: async call => {
    await delay(200);
    await call({
      to: {
        containerXPosition: 100,
        containerOpacity: 0
      }
    });
  }
});

const Options = Keyframes.Trail({
  show: async call => {
    await delay(200);
    await call({
      to: {
        optionsXPosition: 0,
        optionsOpacity: 1
      },
      config: config.stiff
    });
  },
  hide: {
    to: {
      optionsXPosition: 400,
      optionsOpacity: 0
    },
    config: config.stiff
  }
});

export default class SideBar extends React.PureComponent {
  state = {
    show: false
  };

  handleMouseHover = () => {
    this.setState({ show: true });
  };

  handleMouseLeave = () => {
    this.setState({ show: false });
  };

  render() {
    const { options } = this.props;

    return (
      <animated.div className={bem()} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
        <OptionsContainer native state={this.state.show ? 'show' : 'hide'}>
          {({ containerXPosition, containerOpacity }) => (
            <animated.div
              className={bem('optionsContainer')}
              style={{
                opacity: containerOpacity,
                transform: containerXPosition.interpolate(x => `translateX(${x}%)`)
              }}
            >
              <Search id="optionsSearch" />
              <h2 className={bem('optionsLabel')}>
                <FormattedMessage {...messages.label} />
              </h2>
              <Options native keys={options.map(option => option.key)} state={this.state.show ? 'show' : 'hide'}>
                {options.map(option => ({ optionsXPosition, optionsOpacity }) => (
                  <animated.div
                    className={bem('option')}
                    style={{
                      opacity: optionsOpacity,
                      transform: optionsXPosition.interpolate(x => `translateX(${x}%)`)
                    }}
                  >
                    {option.text}
                  </animated.div>
                ))}
              </Options>
            </animated.div>
          )}
        </OptionsContainer>
      </animated.div>
    );
  }
}
