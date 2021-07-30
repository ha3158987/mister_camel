import React, { Component } from 'react';
import styled from '@emotion/styled';

const ProductWrapper = styled.div`
  display: flex;
  gap: 5%;
  border: 1px solid #333;
  padding: 20px;

  & > div {
    width: 50%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ProductTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: 30px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  border: 1px solid #333;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
`;

const Price = styled.span`
  margin-top: auto;
  font-size: 24px;
`;

class CurrentProduct extends Component {
  render() {
    const { products } = this.props;
    return (
      <ProductWrapper>
        <div>
          <Img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/97d5a188-8db8-4bf4-9ba9-c91fd93cf3d9/air-max-97-shoe-klcWX1.png"
            alt="test"
          />
        </div>
        <ProductTextBlock>
          <Title>{products[0].title}</Title>
          <Tag>{products[0].brand}</Tag>
          <Price>{products[0].price}</Price>
        </ProductTextBlock>
      </ProductWrapper>
    );
  }
}

export default CurrentProduct;
