import React, { Component } from 'react';
import FilterPopup from './FilterPopup';
import Button from 'components/common/Button';

class FilterBtns extends Component {
  render() {
    return (
      <div>
        <Button name={'btn_gucci'}>구찌</Button>
        <Button name={'btn_nike'}>나이키</Button>
        <Button name={'btn_louis_vuitton'}>루이비통</Button>
        <Button name={'btn_stone_island'}>스톤 아일랜드</Button>
        <Button name={'btn_popup_filter'} ariaLabel={'popup_sort_filter'}>
          [=]
        </Button>
        <FilterPopup />
      </div>
    );
  }
}

export default FilterBtns;
// 브랜드 필터 버튼을 모아놓은 컴포넌트
// brands list : [ 구찌, 나이키, 루이비통, 스톤 아일랜드 ]
