import React, { Component } from 'react';

import CurrentProduct from 'components/Product/CurrentProduct';
import ProductList from 'components/Product/ProductList';
import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      latestClickedItem: null,
    };
  }

  handleItemClick = latestClickedItem => {
    this.setState({
      ...this.state,
      latestClickedItem,
    });
    //localStorage 저장
    console.log('아이템 클릭', this.state);
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <CurrentProduct products={products} />
        <ProductList
          products={this.state.products}
          handleItemClick={this.handleItemClick}
        />
      </div>
    );
  }
}

export default ProductPage;
