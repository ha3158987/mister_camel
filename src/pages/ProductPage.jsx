import React, { Component } from 'react';

import ProductList from 'components/Product/ProductList';

import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  render() {
    return <ProductList products={PRODUCTS} />;
  }
}

export default ProductPage;
// 전체 상품 리스트가 보여지는 페이지
