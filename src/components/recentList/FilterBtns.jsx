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
  render() {
    const {
      popupVisible,
      brandButtonHandler,
      onChangeHandler,
      setPopupState,
      selectedBrands,
    } = this.props;
    const isActive = name => {
      return selectedBrands.length > 0 && selectedBrands.includes(name);
    };
    return (
      <FilterBtnsStyle>
        <div>
          <BrandButtonStyle
            name={GUCCI.EN}
            active={isActive(GUCCI.EN)}
            onClick={brandButtonHandler}
          >
            구찌
          </BrandButtonStyle>
          <BrandButtonStyle
            name={NIKE.EN}
            active={isActive(NIKE.EN)}
            onClick={brandButtonHandler}
          >
            나이키
          </BrandButtonStyle>
          <BrandButtonStyle
            name={LOUIS_VUITTON.EN}
            active={isActive(LOUIS_VUITTON.EN)}
            onClick={brandButtonHandler}
          >
            루이비통
          </BrandButtonStyle>
          <BrandButtonStyle
            name={STONE_ISLAND.EN}
            active={isActive(STONE_ISLAND.EN)}
            onClick={brandButtonHandler}
          >
            스톤 아일랜드
          </BrandButtonStyle>
        </div>
        <div>
          <SortFilterButton
            name={'btn_popup_filter'}
            ariaLabel={'popup_sort_filter'}
            onClick={setPopupState}
          >
            <FaFilter />
          </SortFilterButton>
          <FilterPopup
            popupVisible={popupVisible}
            setPopupState={setPopupState}
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
