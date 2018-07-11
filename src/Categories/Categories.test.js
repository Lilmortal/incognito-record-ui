import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import Categories from './Categories';

let defaultProps;

beforeEach(() => {
  defaultProps = {
    categories: [
      {
        id: 0,
        key: 0,
        text: 'text1',
      },
      {
        id: 1,
        key: 1,
        text: 'text2',
      },
    ],
  };
});

afterEach(() => {
  jest.clearAllTimers();
});

const renderMount = props =>
  mount(
    <IntlProvider locale="en">
      <Categories {...defaultProps} {...props} />
    </IntlProvider>
  );

it('should render categories', () => {
  jest.useFakeTimers();
  const categories = renderMount();

  categories.update();

  // TODO: Fix this test
  const result = new Promise(resolve =>
    resolve(
      categories
        .find('.incognito-Categories')
        .filterWhere(category => category.is('div'))
        .prop('onMouseEnter')()
    ).then(() =>
      setTimeout(() => {
        expect(
          categories
            .find('.incognito-Categories__category')
            .first()
            .text()
        ).toEqual('text1');
      }, 200)
    )
  );

  jest.runAllTimers();
  return result;
});
