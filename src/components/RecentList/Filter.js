import React, { Component } from 'react';

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
        <div>
          <button type="button" name="btn_gucci">
            구찌
          </button>
          <button type="button" name="btn_nike">
            나이키
          </button>
          <button type="button" name="btn_louis_vuitton">
            루이비통
          </button>
          <button type="button" name="btn_stone_island">
            스톤아일랜드
          </button>
          <button
            type="button"
            name="btn_popup_filter"
            aria-label="popup_sort_filter"
          >
            [=]
          </button>
          <div>
            <button type="button" name="btn_close" aria-label="close_popup">
              X
            </button>
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
        </div>
      </div>
    );
  }
}

export default Filter;
