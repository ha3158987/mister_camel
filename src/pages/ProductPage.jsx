import React, { Component } from 'react';

import CurrentProduct from 'components/product/CurrentProduct';
import ProductList from 'components/product/ProductList';
import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS.map((product) => {
        product.isInterested = true;
        return product;
      }),
      latestClickedItem: null,
      clickedItem: []
    }
  }

  handleItemClick = (latestClickedItem) => {
    this.state.clickedItem.push(latestClickedItem);
    this.setState({
      ...this.state,
      ...this.clickedItem,
      latestClickedItem
    })
    localStorage.setItem('viewed', JSON.stringify(this.state.clickedItem))
  };

  render() {
    const { products, latestClickedItem } = this.state;
    return (
      <>
        {
        this.state.latestClickedItem !== null
        ? <>
          <CurrentProduct latestClickedItem={latestClickedItem}/>
          <ProductList
            products={products}
            handleItemClick={this.handleItemClick}
          />
          </>
        : <ProductList
            products={products}
            handleItemClick={this.handleItemClick}
          />
        }
      </>
    );
  }
}

export default ProductPage;
