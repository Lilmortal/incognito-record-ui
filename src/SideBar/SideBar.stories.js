import React from 'react';
import { storiesOf } from '@storybook/react';

import SideBar from './SideBar';

storiesOf('SideBar', module).add('default', () => (
  <SideBar options={[{ key: 0, text: 'category 1' }, { key: 1, text: 'category 2' }, { key: 2, text: 'category 3' }]} />
));
