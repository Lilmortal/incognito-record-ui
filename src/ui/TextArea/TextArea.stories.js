import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import TextArea from './TextArea';

storiesOf('TextArea', module)
  .addDecorator(centered)
  .add('default', () => <TextArea label="label" />)
  .add('with placeholder', () => <TextArea placeholder={{ id: 'placeholder', defaultMessage: 'Placeholder' }} />);
