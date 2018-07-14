import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import SideBar from './SideBar';

let defaultProps;

beforeEach(() => {
  defaultProps = {
    options: [
      {
        id: 0,
        key: 0,
        text: 'text1'
      },
      {
        id: 1,
        key: 1,
        text: 'text2'
      }
    ]
  };
});

afterEach(() => {
  jest.clearAllTimers();
});

const renderMount = props =>
  mount(
    <IntlProvider locale="en">
      <SideBar {...defaultProps} {...props} />
    </IntlProvider>
  );

it('should render sideBar', () => {
  jest.useFakeTimers();
  const sideBar = renderMount();

  sideBar.update();

  // TODO: Fix this test
  const result = new Promise(resolve =>
    resolve(
      sideBar
        .find('.incognito-SideBar')
        .filterWhere(option => option.is('div'))
        .prop('onMouseEnter')()
    ).then(() =>
      setTimeout(() => {
        expect(
          sideBar
            .find('.incognito-SideBar__option')
            .first()
            .text()
        ).toEqual('text1');
      }, 200)
    )
  );

  jest.runAllTimers();
  return result;
});
