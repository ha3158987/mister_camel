import { Component } from 'react';

import List from 'components/common/List';
import ListItem from 'components/common/ListItem';
import Button, { ButtonStyle } from 'components/common/Button';
import styled from '@emotion/styled';

const RandomButtonBlock = styled.div`
  margin: 50px 0;
`;

const RandmoButton = styled(ButtonStyle)`
  border-radius: 5px;
  font-size: 1rem;
`;

class ProductList extends Component {
  state = {
    lists: this.props.products,
  };

  handleRandomButtonClick = () => {
    const lists = [];
    const itemLists = this.state.lists.map(item => item);
    for (let i = 0; i < this.props.products.length; i++) {
      const randomLists = Math.floor(Math.random() * (itemLists.length - 1));
      lists.push(itemLists[randomLists]);
    }
    this.setState({
      lists,
    });
  };

  handleButtonClick = e => {
    e.stopPropagation();

    console.log('관심 없음 버튼 클릭');
  };

  render() {
    const { products } = this.props;
    const { lists } = this.state;
    return (
      <>
        <RandomButtonBlock>
          <RandmoButton onClick={this.handleRandomButtonClick}>
            랜덤 상품 조회
          </RandmoButton>
        </RandomButtonBlock>
        {this.handleRandomButtonClick ? (
          <List>
            {lists &&
              lists.map(({ title, brand, price }, index) => (
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
        ) : (
          <List>
            {products &&
              products.map(({ title, brand, price }, index) => (
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
        )}
      </>
    );
  }
}

export default ProductList;
