import React, { Component } from 'react';
import styled from '@emotion/styled';
import { FilterBtns, InputGroup } from 'components/RecentList';

const FilterStyle = styled.div`
  position: relative;
  margin-bottom: 20px;

  & > div + div {
    margin-top: 10px;
  }
`;

class Filter extends Component {
  render() {
    return (
      <FilterStyle>
        <InputGroup
          type={'checkbox'}
          name={'hide_no_interest'}
          value={'hide_no_interest'}
        >
          관심 없는 상품 숨기기
        </InputGroup>
        <FilterBtns />
      </FilterStyle>
    );
  }
}

export default Filter;
