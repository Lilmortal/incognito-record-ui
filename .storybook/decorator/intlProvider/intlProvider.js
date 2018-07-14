import React from 'react';
import { IntlProvider } from 'react-intl';
import { addDecorator } from '@storybook/react';

const intlProviderDecorator = storyFn => <IntlProvider locale="en">{storyFn()}</IntlProvider>;

export default intlProviderDecorator;
