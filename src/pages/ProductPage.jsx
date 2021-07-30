import React, { Component } from 'react';

import CurrentProduct from 'components/product/CurrentProduct';
import ProductList from 'components/product/ProductList';
import PRODUCTS from 'fixture/productsData';

class ProductPage extends Component {
  state = {
    products: PRODUCTS,
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <CurrentProduct products={products} />
        <ProductList products={products} />
      </div>
    );
  }
}

export default ProductPage;
