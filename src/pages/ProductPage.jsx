import React, { Component } from 'react';

import ProductList from 'components/product/ProductList';

import PRODUCTS from 'fixture/productsData';

import CurrentProduct from 'components/product/CurrentProduct';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <CurrentProduct />
        <ProductList products={PRODUCTS} />
      </div>
    );
  }
}

export default ProductPage;
// 전체 상품 리스트가 보여지는 페이지
