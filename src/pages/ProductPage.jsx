import React, { Component } from 'react';

import CurrentProduct from 'components/product/CurrentProduct';
import ProductList from 'components/product/ProductList';
import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      latestClickedItem: null,
      clickedItem: []
    }
  }

  handleItemClick = (latestClickedItem) => {
    this.state.clickedItem.push(latestClickedItem);
    this.setState({
      ...this.state,
      latestClickedItem
    })
    localStorage.setItem('viewed', JSON.stringify(this.state.clickedItem))
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
