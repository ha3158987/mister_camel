import { Component } from 'react';
import { Route } from 'react-router-dom';

import ProductPage from 'pages/ProductPage';
import RecentListPage from 'pages/RecentListPage';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ProductPage} />
        <Route path="/recentList" component={RecentListPage} />
      </>
    );
  }
}

export default Routes;
