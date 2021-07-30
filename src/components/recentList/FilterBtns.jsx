import React, { Component } from 'react';
import { FaFilter } from 'react-icons/fa';
import styled from '@emotion/styled';

import Button from 'components/common/Button';
import { FilterPopup } from './index';
import { colors } from 'styles/colors';
import brands from 'utils/constants/brandName';

const FilterBtnsStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const FilterBtnsCommonStyle = styled(Button)`
  border-radius: 10px;
  padding: 7px 9px 7px 9px;
  font-size: 0.8em;
`;

const BrandButtonStyle = styled(FilterBtnsCommonStyle)`
  background: ${({ active }) => (active ? colors.camelBlue : 'white')};
  border: 1px solid ${colors.camelBlue};
  color: ${({ active }) => (active ? 'white' : colors.camelBlue)};
  font-weight: bold;
  margin-right: 5px;
`;

const SortFilterButton = styled(FilterBtnsCommonStyle)`
  background: white;
  border: 1px solid gray;
  color: gray;
  &:hover {
    background: gray;
    color: white;
  }
`;

const { GUCCI, NIKE, LOUIS_VUITTON, STONE_ISLAND } = brands;

class FilterBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      gucci: false,
      nike: false,
      louis_vuitton: false,
      stone_island: false,
    };
  }
  setPopupState = () => {
    this.setState(state => ({
      ...state,
      popupVisible: !state.popupVisible,
    }));
  };
  setBrandState = name => {
    this.setState(state => {
      switch (name) {
        case GUCCI.EN:
          return { ...state, gucci: !state.gucci };
        case NIKE.EN:
          return { ...state, nike: !state.nike };
        case STONE_ISLAND.EN:
          return { ...state, stone_island: !state.stone_island };
        case LOUIS_VUITTON.EN:
          return { ...state, louis_vuitton: !state.louis_vuitton };
        default:
          break;
      }
    });
    console.log(`${name} 클릭`);
  };

  render() {
    const { onChangeHandler } = this.props;
    return (
      <FilterBtnsStyle>
        <div>
          <BrandButtonStyle
            name={GUCCI.EN}
            active={this.state.gucci}
            onClick={this.setBrandState}
          >
            구찌
          </BrandButtonStyle>
          <BrandButtonStyle
            name={NIKE.EN}
            active={this.state.nike}
            onClick={this.setBrandState}
          >
            나이키
          </BrandButtonStyle>
          <BrandButtonStyle
            name={LOUIS_VUITTON.EN}
            active={this.state.louis_vuitton}
            onClick={this.setBrandState}
          >
            루이비통
          </BrandButtonStyle>
          <BrandButtonStyle
            name={STONE_ISLAND.EN}
            active={this.state.stone_island}
            onClick={this.setBrandState}
          >
            스톤 아일랜드
          </BrandButtonStyle>
        </div>
        <div>
          <SortFilterButton
            name={'btn_popup_filter'}
            ariaLabel={'popup_sort_filter'}
            onClick={this.setPopupState}
          >
            <FaFilter />
          </SortFilterButton>
          <FilterPopup
            popupVisible={this.state.popupVisible}
            setPopupState={this.setPopupState}
            onChangeHandler={onChangeHandler}
          />
        </div>
      </FilterBtnsStyle>
    );
  }
}

export default FilterBtns;
// 브랜드 필터 버튼을 모아놓은 컴포넌트
// brands list : [ 구찌, 나이키, 루이비통, 스톤 아일랜드 ]
