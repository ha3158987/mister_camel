import { Component } from 'react';

import List from 'components/common/List';
import ListItem from 'components/common/ListItem';

class RecentProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <List>
        {products.map(({ title, brand, price }, index) => (
          <ListItem key={index} title={title} brand={brand} price={price} />
        ))}
      </List>
    );
  }
}

export default RecentProductList;
