import React, { Component } from 'react';
import Button from 'components/common/Button';

class FilterPopup extends Component {
  render() {
    return (
      <div>
        <Button name={'btn_close'} ariaLabel={'close_popup'}>
          X
        </Button>
        <input
          type="radio"
          name="sort_filter"
          id="recent_view"
          value="recent_view"
        />
        <label htmlFor="recent_view">최근 조회 순</label>
        <input
          type="radio"
          name="sort_filter"
          id="row_price"
          value="row_price"
        />
        <label htmlFor="row_price">낮은 가격 순</label>
      </div>
    );
  }
}

export default FilterPopup;
