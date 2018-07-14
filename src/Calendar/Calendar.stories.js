import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import centered from '@storybook/addon-centered';

import Calendar from './Calendar';

const store = new Store({
  date: moment('31/12/2018', 'DD/MM/YYYY')
});

storiesOf('Calendar', module)
  .addDecorator(centered)
  .add('default', () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <State store={store}>
        <Calendar date={store.get('date')} />
      </State>
      <button
        onClick={() => {
          store.get('date').add(1, 'days');
          store.set({ date: moment(store.get('date')) });
        }}
        style={{ width: 200, height: 50, marginLeft: 100 }}
      >
        Increment date
      </button>
    </div>
  ));
