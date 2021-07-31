import React, { Component } from 'react';

import styled from '@emotion/styled';

const Item = styled.li`
  position: relative;
  display: flex;
  cursor: pointer;

  button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Image = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: #dcdcdc;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 5px 0;
`;

const Price = styled.p`
  margin-top: auto;
`;

const Tag = styled.p`
  span {
    display: inline-block;
    margin-top: 4px;
    padding: 4px;
    border: 1px solid rosybrown;
    border-radius: 10px;
    font-size: 12px;
    color: rosybrown;
  }
`;

const AlertMessage = styled.div`
  color: red;
  size: 16px;
`

class ListItem extends Component {
  render() {
    const totalPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const { title, brand, isInterested, price, src, onClick, isClicked, children } = this.props;


    return (
      <Item onClick={onClick}>
        <Image>{src ? <img src={src} alt="상품 이미지" /> : 'Mr.Camel'}</Image>
        <Content>
          <p>{title}</p>
          <Tag>
            <span>{brand}</span>
          </Tag>
          <Price>{totalPrice}원</Price>
        </Content>
        {children}
        {!isInterested && isClicked && <AlertMessage>'관심없음을 해제한 후 다시 클릭해주세요🙅🏻‍♀️'</AlertMessage>}
      </Item>
    );
  }
}

export default ListItem;
