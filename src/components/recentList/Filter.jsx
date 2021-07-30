import React, { Component } from 'react';
import styled from '@emotion/styled';
import { FilterBtns, InputGroup } from 'components/recentList';

const FilterStyle = styled.div`
  position: relative;
  margin-bottom: 20px;

  & > div + div {
    margin-top: 10px;
  }
`;

class Filter extends Component {
  hideNoInterest = () => {
    console.log('hideNodInterest');
  };

  sortRecentView = () => {
    console.log('sortRecentView');
  };

  sortRowPrice = () => {
    console.log('sortRowPrice');
  };

  checkBoxHandler = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'hide_no_interest':
        this.hideNoInterest();
        break;
      case 'recent_view':
        this.sortRecentView();
        break;
      case 'row_price':
        this.sortRowPrice();
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <FilterStyle>
        <InputGroup
          type={'checkbox'}
          name={'hide_no_interest'}
          value={'hide_no_interest'}
          onChangeHandler={this.checkBoxHandler}
        >
          관심 없는 상품 숨기기
        </InputGroup>
        <FilterBtns onChangeHandler={this.checkBoxHandler} />
      </FilterStyle>
    );
  }
}

export default Filter;
