import React, { Component } from 'react';
import { IoClose } from 'react-icons/io5';
import styled from '@emotion/styled';
import Button from 'components/common/Button';
import { InputGroup } from 'components/recentList';

const FilterPopupStyle = styled.div`
  display: ${({ popupVisible }) => (popupVisible ? 'flex' : 'none')};
  position: absolute;
  top: 40px;
  right: 0px;
  background: white;
  z-index: 100;
  width: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 25px 0px;
  box-shadow: 2px 1px 5px 2px rgba(160, 160, 160, 0.3);

  button {
    width: 30px;
    margin-left: auto;
  }
`;

const CloseButtonStyle = styled(Button)`
  background: white;
`;

class FilterPopup extends Component {
  render() {
    const { popupVisible, setPopupState, onChangeHandler } = this.props;
    return (
      <FilterPopupStyle popupVisible={popupVisible}>
        <CloseButtonStyle
          name={'btn_close'}
          ariaLabel={'close_popup'}
          onClick={setPopupState}
        >
          <IoClose />
        </CloseButtonStyle>
        <InputGroup
          type={'radio'}
          name={'sort_filter'}
          value={'recent_view'}
          onChangeHandler={onChangeHandler}
          useChecked={false}
        >
          최근 조회 순
        </InputGroup>
        <InputGroup
          type={'radio'}
          name={'sort_filter'}
          value={'row_price'}
          onChangeHandler={onChangeHandler}
          useChecked={false}
        >
          낮은 가격 순
        </InputGroup>
      </FilterPopupStyle>
    );
  }
}

export default FilterPopup;
