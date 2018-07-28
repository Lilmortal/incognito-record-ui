import React from 'react';

import Admin from '../../Admin';

export default class AdminPage extends React.Component {
  onLogout = () => {};

  render() {
    return <Admin isLoggedIn onLogout={this.onLogout} messageCode="loginFailure" />;
  }
}
