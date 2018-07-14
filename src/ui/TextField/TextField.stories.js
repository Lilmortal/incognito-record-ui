import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import TextField from './TextField';

storiesOf('TextField', module)
  .addDecorator(centered)
  .add('default', () => <TextField label="label" htmlFor="storybook-textfield" />)
  .add('with placeholder', () => <TextField placeholder={{ id: 'placeholder', defaultMessage: 'Placeholder' }} />)
  .add('with no border type', () => (
    <TextField
      label="label"
      htmlFor="storybook-textfield"
      placeholder={{ id: 'placeholder', defaultMessage: 'Placeholder' }}
      type="noBorder"
    />
  ));
