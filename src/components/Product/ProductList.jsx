import { Component } from 'react';

import List from 'components/common/List';
import ListItem from 'components/common/ListItem';
import Button from 'components/common/Button';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = e => {
    e.stopPropagation();
    console.log('관심 없음 버튼 클릭');
  };

  render() {
    const { products, handleItemClick } = this.props;
    console.log("products",products);

    return (
       <List>
        {products && products.map(({ title, brand, price }, index) => (
          <ListItem
            key={index}
            title={title}
            brand={brand}
            price={price}
            onClick={() => handleItemClick({ title, brand, price , id : index})}
          >
            <Button onClick={this.handleButtonClick}>관심 없음</Button>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ProductList;
