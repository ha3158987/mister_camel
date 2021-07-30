import React, { Component } from 'react';

import ProductList from 'components/Product/ProductList';
import CurrentProduct from 'components/Product/CurrentProduct';

// import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <CurrentProduct />
        {/*<ProductList products={PRODUCTS} />*/}
      </div>
    );
  }
}

export default ProductPage;
// 전체 상품 리스트가 보여지는 페이지
