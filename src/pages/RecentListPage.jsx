import React, { Component } from 'react';

import Filter from 'components/recentList/Filter';
import RecentProductList from 'components/recentList/RecentProductList';

import PRODUCTS from 'fixture/productsData';

class RecentListPage extends Component {
  render() {
    return (
      <>
        <Filter />
        <RecentProductList products={PRODUCTS} />
      </>
    );
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
