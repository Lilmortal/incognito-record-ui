import React from 'react';

import { createBem } from '../util/bem';
import SideBar from '../SideBar';
import Search from '../ui/Search';
import Navigation from './Navigation';
import Navicon from './Navicon';
import './Header.scss';

const bem = createBem('incognito-Header');

const Header = ({ isAbsolute, showSideBar }) => (
  <header className={bem('', isAbsolute ? 'isAbsolute' : '')}>
    <Navigation isAbsolute={isAbsolute} />

    {showSideBar && (
      <React.Fragment>
        <div className={bem('search')}>
          <Search id="headerSearch" />
        </div>
        <div className={bem('sideBar')}>
          <Navicon />
          <SideBar
            options={[
              { key: 0, text: 'Docker' },
              { key: 1, text: 'Node JS' },
              { key: 2, text: 'Golang' },
              { key: 3, text: 'Kubernetes' },
              { key: 4, text: 'Terraform' },
              { key: 5, text: 'AWS Lambda' },
              { key: 6, text: 'AWS Cloudfront' },
              { key: 7, text: 'Elastic Search' }
            ]}
          />
        </div>
      </React.Fragment>
    )}
  </header>
);

export default Header;
