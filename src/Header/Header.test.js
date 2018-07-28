import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

let defaultProps;

beforeEach(() => {
  defaultProps = {
    isAbsolute: false,
    showSideBar: false
  };
});

const renderShallow = props => shallow(<Header {...defaultProps} {...props} />);

describe('render search', () => {
  it('should not render search if not in home page', () => {
    const header = renderShallow();

    expect(header.find('.incognito-Header__search').exists()).toEqual(false);
  });

  it('should render search if in home page', () => {
    const header = renderShallow({ showSideBar: true });

    expect(header.find('.incognito-Header__search').exists()).toEqual(true);
  });
});
