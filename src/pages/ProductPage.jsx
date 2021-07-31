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
      scrollTop: 0,
    };
  }

  handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.setState({
      scrollTop: 0,
    });
  };

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
    this.handleTop();
  };

  componentDidUpdate = (_prevProps, prevState) => {
    if (
      this.state.latestClickedItem?.title !== prevState.latestClickedItem?.title
    ) {
      this.handleStateChange({
        key: 'clickedItem',
        value: [this.state.latestClickedItem, ...this.state.clickedItem],
      });
    } else if (this.state.products !== prevState.products) {
      let prevClickedItem = [...this.state.clickedItem];
      this.state.products.forEach(product => {
        for (let item of prevClickedItem) {
          if (product.isInterested === false && product.title === item.title) {
            item.isInterested = false;
          }
        }
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
