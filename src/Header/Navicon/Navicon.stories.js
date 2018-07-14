import React from 'react';
import { storiesOf } from '@storybook/react';

import Navicon from './Navicon';

storiesOf('Navicon', module).add('default', () => (
  <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
    <Navicon />
  </div>
));
