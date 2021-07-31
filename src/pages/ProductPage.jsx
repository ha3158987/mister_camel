import React, { Component } from 'react';

import CurrentProduct from 'components/product/CurrentProduct';
import ProductList from 'components/product/ProductList';
import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS.map(product => {
        product.isInterested = true;
        return product;
      }),
      latestClickedItem: null,
      clickedItem: [],
    };
  }

  handleStateChange = ({ key, value }) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  handleItemClick = latestClickedItem => {
    this.handleStateChange({
      key: 'latestClickedItem',
      value: latestClickedItem,
    });
  };

  componentDidUpdate = (_prevProps, prevState) => {
    if (this.state.latestClickedItem !== prevState.latestClickedItem) {
      this.handleStateChange({
        key: 'clickedItem',
        value: [this.state.latestClickedItem, ...this.state.clickedItem],
      });
    }

    localStorage.setItem('viewed', JSON.stringify(this.state.clickedItem));
  };

  componentDidMount = () => {
    const { clickedItem } = this.state;

    const viewed = JSON.parse(localStorage.getItem('viewed')) || clickedItem;

    this.handleStateChange({ key: 'clickedItem', value: viewed });
  };

  render() {
    const { products, latestClickedItem } = this.state;

    return (
      <>
        {this.state.latestClickedItem && (
          <CurrentProduct latestClickedItem={latestClickedItem} />
        )}
        <ProductList
          products={products}
          handleItemClick={this.handleItemClick}
          handleStateChange={this.handleStateChange}
        />
      </>
    );
  }
}

export default ProductPage;
