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
      setBrandState,
      setPopupState,
      brandState,
      popupVisible,
      checkBoxHandler,
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
          brandState={brandState}
          popupVisible={popupVisible}
          setPopupState={setPopupState}
          setBrandState={setBrandState}
          onChangeHandler={checkBoxHandler}
        />
      </FilterStyle>
    );
  }
}

export default Filter;
