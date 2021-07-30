import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import ProductPage from 'pages/ProductPage';
import RecentListPage from 'pages/RecentListPage';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/">
          <Redirect to="/product" />
        </Route>
        <Route path="/product" component={ProductPage} />
        <Route path="/recentList" component={RecentListPage} />
      </>
    );
  }
}

export default Routes;
