import { Component } from 'react';

import List from 'components/common/List';
import ListItem from 'components/common/ListItem';
import Button from 'components/common/Button';

class ProductList extends Component {
  handleItemClick = e => {
    console.log('아이템 클릭');
  };

  handleButtonClick = e => {
    e.stopPropagation();

    console.log('관심 없음 버튼 클릭');
  };

  render() {
    const { products } = this.props;

    return (
      <List>
        {products.map(({ title, brand, price }, index) => (
          <ListItem
            key={index}
            title={title}
            brand={brand}
            price={price}
            onClick={this.handleItemClick}
          >
            <Button onClick={this.handleButtonClick}>관심 없음</Button>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ProductList;
