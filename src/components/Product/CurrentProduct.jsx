import React, { Component } from 'react';
import styled from '@emotion/styled';

const ProductWrapper = styled.div`
  display: flex;
  border: 1px solid #333;
  padding: 20px;

  & > div {
    width: 50%;
    margin-right: 5%;
  }

  & > div:last-child {
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ProductTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 32px;
  letter-spacing: 5px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  width: 80px;
  height: 30px;
  border: 1px solid #333;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
`;

const Price = styled.span`
  margin-top: auto;
  font-size: 24px;
`;

class CurrentProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProductWrapper>
        <div>
          <Img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/97d5a188-8db8-4bf4-9ba9-c91fd93cf3d9/air-max-97-shoe-klcWX1.png"
            alt="test"
          />
        </div>
        <ProductTextBlock>
          <Title>구찌 라이톤 38 사이즈</Title>
          <Tag>구찌</Tag>
          <Price>190,000원</Price>
        </ProductTextBlock>
      </ProductWrapper>
    );
  }
}

export default CurrentProduct;
