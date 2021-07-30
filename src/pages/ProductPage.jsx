import React, { Component } from 'react';
import CurrentProduct from 'components/Product/CurrentProduct';

class ProductPage extends Component {
  render() {
    return (
      <div>
        <CurrentProduct />
      </div>
    );
  }
}

export default ProductPage;
// 전체 상품 리스트가 보여지는 페이지
