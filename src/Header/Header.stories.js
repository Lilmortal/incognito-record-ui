import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('Header', module)
  .add('default', () => (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <Header isHomePage />
    </div>
  ))
  .add('header that is not on home page', () => <Header />);
