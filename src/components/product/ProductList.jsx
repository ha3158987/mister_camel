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

const NotInterestedButton = styled(ButtonStyle)`
`;

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.products,
    };
  }

  handleRandomButtonClick = () => {
    const lists = [];
    const itemLists = this.state.lists.map(item => item);
    for (let i = 0; i < this.props.products.length - 1; i++) {
      const randomLists = Math.floor(Math.random() * (itemLists.length - 1));

      lists.push(itemLists[randomLists + 1]);
    }
    this.setState({
      lists,
    });
  };

  handleNotInterestedBtnClick = (title) => {
    // const clickedItems = JSON.parse(localStorage.getItem('viewed'));
    const {products, handleStateChange} = this.props;
    
    const updatedItems = products.map((item) => ({
      ...item,
      isInterested : item.title === title ? false : true
    }))

    // localStorage.setItem('viewed', JSON.stringify(updatedItems));

    console.log({updatedItems});

    handleStateChange({key: "products", value: updatedItems});
    
    handleStateChange({key: "products", value: updatedItems});
  };

  render() {
    const { products, handleItemClick } = this.props;
    const { lists } = this.state;

    console.log('========');
    console.log('products ? ', this.props.products);
    console.log('list ? ', this.state.list);

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
              lists.map(({ title, brand, price, isInterested }, index) => (
                <ListItem
                  key={index}
                  title={title}
                  brand={brand}
                  price={price}
                  isInterested={isInterested}
                  onClick={() => handleItemClick({ id : index, isInterested, title, brand, price })}
                >
                  <NotInterestedButton
                    onClick={(e) => {
                      console.log(e)
                      e.stopPropagation();
                      this.handleNotInterestedBtnClick(title)
                    }}
                  >
                    관심 없음
                  </NotInterestedButton>
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
                  onClick={() =>
                    handleItemClick({
                      id: index,
                      isInterested: true,
                      title,
                      brand,
                      price,
                    })
                  }
                >
                  <NotInterestedButton
                    onClick={(e) => {
                      // console.log(e)
                      e.stopPropagation();
                      this.handleNotInterestedBtnClick(title)
                    }}
                  >
                    관심 없음
                  </NotInterestedButton>
                </ListItem>
              ))}
          </List>
        )}
      </>
    );
  }
}

export default ProductList;
