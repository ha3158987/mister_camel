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
      clickedItem: [],
    }
  }

  handleStateChange = ({key, value}) => {
    this.setState({
      ...this.state,
      [key] : value
    })
  }

  handleItemClick = (latestClickedItem) => {
    this.handleStateChange({key : 'latestClickedItem', value: latestClickedItem});

    this.handleStateChange({key : 'clikedItem', value: [latestClickedItem, ...this.state.clickedItem]});

    localStorage.setItem('viewed', JSON.stringify(this.state.clickedItem))
  };

  componentDidUpdate = (_prevProps, prevState) => {
    console.log('prevState ? ', prevState);
    // console.log('this.state.latestClickedItem ? ', this.state.latestClickedItem)
    
    // if(this.state.latestClickedItem !== prevState.latestClickedItem) {
    //   this.handleStateChange({key : 'clikedItem', value: [this.state.latestClickedItem, ...this.state.clickedItem]});
    // }

    // console.log(this.state.latestClickedItem, this.state.clickedItem)
  }
  
  render() {
    const { products, latestClickedItem, clickedItem } = this.state;
    

    return (
      <>
        {this.state.latestClickedItem && <CurrentProduct latestClickedItem={latestClickedItem}/>}
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
