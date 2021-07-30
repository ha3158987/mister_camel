import React, { Component } from 'react';
import FilterBtns from './FilterBtns';

class Filter extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="hide_no_interest"
          id="hide_no_interest"
          value="hide_no_interest"
        />
        <label htmlFor="hide_no_interest">관심 없는 상품 숨기기</label>
        <FilterBtns />
      </div>
    );
  }
}

export default Filter;
