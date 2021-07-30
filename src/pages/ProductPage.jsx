import React, { Component } from 'react';

import ProductList from 'components/product/ProductList';
import CurrentProduct from 'components/product/CurrentProduct';

import PRODUCTS from 'fixture/productsData';


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      latestClickedItem: null
    }
  }

  handleItemClick = (latestClickedItem) => {
    this.setState({
      ...this.state,
      latestClickedItem
    })
    //localStorage 저장
    console.log('아이템 클릭', this.state);
  };

  render() {
    return (
      <div>
        <CurrentProduct />
        <ProductList products={this.state.products} handleItemClick={this.handleItemClick}/>
      </div>
    );
  }
}

export default ProductPage;
// 전체 상품 리스트가 보여지는 페이지
