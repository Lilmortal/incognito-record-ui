import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import CountdownTimer from './CountdownTimer';

storiesOf('CountdownTimer', module)
  .addDecorator(centered)
  .add('current time', () => <CountdownTimer initialDateTime={new Date()} />)
  .add('started at 31/07/2011 23:59:30', () => <CountdownTimer initialDateTime={Date.parse('2011-07-31T23:59:30')} />);
