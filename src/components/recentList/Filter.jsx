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
  render() {
    const {
      brandButtonHandler,
      setPopupState,
      popupVisible,
      checkBoxHandler,
      selectedBrands,
    } = this.props;
    return (
      <FilterStyle>
        <InputGroup
          type={'checkbox'}
          name={'hide_no_interest'}
          value={'hide_no_interest'}
          onChangeHandler={checkBoxHandler}
        >
          관심 없는 상품 숨기기
        </InputGroup>
        <FilterBtns
          popupVisible={popupVisible}
          setPopupState={setPopupState}
          brandButtonHandler={brandButtonHandler}
          onChangeHandler={checkBoxHandler}
          selectedBrands={selectedBrands}
        />
      </FilterStyle>
    );
  }
}

export default Filter;
