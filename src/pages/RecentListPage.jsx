import React, { Component } from 'react';

import { Filter, RecentProductList } from 'components/recentList';
import { changeKoToEn } from '../utils/utilFunc';

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clickedItems: [],
      filteredItems: [],
      selectedBrands: [],
      popupVisible: false,
      checkBoxState: false,
    };
  }

  /* brand 버튼 관련 기능 */
  addSelectedBrandList = name => {
    this.setState(state => ({
      selectedBrands:
        !state.selectedBrands.includes(name) &&
        state.selectedBrands.concat(name),
    }));
  };

  removeSelectedBrandList = name => {
    this.setState(state => ({
      selectedBrands: state.selectedBrands.filter(
        brandName => brandName !== name,
      ),
    }));
  };

  changeSelectedBrand = (add, name) => {
    // selectedBrand 를 브랜드 버튼의 상태에 따라 알맞은 함수를 연결해주는 함수

    // add
    add && this.addSelectedBrandList(name);
    //remove
    !add && this.removeSelectedBrandList(name);
  };

  brandButtonHandler = name => {
    // 브랜드 버튼을 클릭하면 실행됨

    this.changeSelectedBrand(!this.state.selectedBrands.includes(name), name);
    this.makeClickedItemFiltered(!this.state.checkBoxState);
  };

  makeClickedItemFiltered = flag => {
    // clickedItems 중 선택된 브랜드만 보이게 필터링 하는 함수

    this.setState(state => ({
      ...state,
      filteredItems: state.clickedItems.filter(({ brand }) =>
        state.selectedBrands.includes(changeKoToEn(brand)),
      ),
    }));

    !flag &&
      this.setState(state => ({
        ...state,
        filteredItems: state.filteredItems.filter(
          ({ isInterested }) => isInterested,
        ),
      }));
  };

  /* Input(checkbox, radio) 관련 기능 */
  changeCheckBoxState = () => {
    // checkBoxState 상태를 변경하는 함수

    this.setState(state => ({
      ...state,
      checkBoxState: !state.checkBoxState,
    }));
  };
  showOnlyInterestedItem = ({ isInterested }) => isInterested === true;

  hideNoInterest = () => {
    // 관심 없는 상품을 필터링하는 함수
    const isFiltered = this.state.filteredItems.length > 0;
    const { checkBoxState } = this.state;
    if (isFiltered) {
      // 필터된 거
      // 체크 해제
      checkBoxState && this.makeClickedItemFiltered(checkBoxState);
      // 체크함
      !checkBoxState &&
        this.setState(state => ({
          ...state,
          filteredItems: state.filteredItems.filter(item =>
            this.showOnlyInterestedItem(item),
          ),
        }));
    } else {
      // 전체 목록
      checkBoxState && this.makeClickedItemFiltered(checkBoxState);
      !checkBoxState &&
        this.setState(state => ({
          ...state,
          filteredItems: state.clickedItems.filter(item =>
            this.showOnlyInterestedItem(item),
          ),
        }));
    }
  };

  HideNoInterestHandler = () => {
    // 관심 없는 상품 숨기기 클릭시 실행

    this.changeCheckBoxState();
    this.hideNoInterest();
  };

  sortRecentView = () => {
    const isFiltered = this.state.filteredItems.length > 0;
    const { checkBoxState } = this.state;
    if (isFiltered && checkBoxState) {
      this.getClickedItem();
      checkBoxState &&
        this.setState(state => ({
          ...state,
          filteredItems: state.clickedItems.filter(
            ({ brand, isInterested }) =>
              state.selectedBrands.includes(changeKoToEn(brand)) &&
              isInterested,
          ),
        }));
    } else {
      this.makeClickedItemFiltered(!checkBoxState);
    }
    this.setPopupState();
  };

  sortWithPrice = items => items.sort((a, b) => a.price - b.price);

  sortRowPrice = () => {
    const isFiltered = this.state.filteredItems.length > 0;
    // 필터된 거
    isFiltered &&
      this.setState(state => ({
        ...state,
        filteredItems: this.sortWithPrice(state.filteredItems),
      }));
    // 전체 목록
    !isFiltered &&
      this.setState(state => ({
        ...state,
        clickedItems: this.sortWithPrice(state.clickedItems),
      }));
    this.setPopupState();
  };

  checkBoxHandler = e => {
    // 클릭한 input 태그에 따라 알맞게 연결해주는 함수
    const { value } = e.currentTarget;
    switch (value) {
      case 'hide_no_interest':
        this.HideNoInterestHandler();
        break;
      case 'recent_view':
        this.sortRecentView();
        break;
      case 'row_price':
        this.sortRowPrice();
        break;
      default:
        break;
    }
  };

  /* 필터 팝업 */
  setPopupState = () => {
    // 필터 팝업의 state 를 관리하는 함수

    this.setState(state => ({
      ...state,
      popupVisible: !state.popupVisible,
    }));
  };

  getClickedItem = () => {
    // 로컬호스트에서 최근 본 아이템 데이터를 받아오는 함수
    const clickedItems = JSON.parse(localStorage.getItem('viewed'));

    //실제 API가 있을 경우, 비동기로 들어올 것을 고려해 시뮬레이팅함.
    this.setState(state => ({
      ...state,
      isLoading: true,
    }));
    setTimeout(() => {
      // clickedItems 가 없을 때
      !clickedItems &&
        this.setState(state => ({
          ...state,
          isLoading: false,
          clickedItems: [],
        }));

      // clickedItems 가 있을 때
      clickedItems &&
        this.setState(state => ({
          ...state,
          isLoading: false,
          clickedItems,
        }));
    }, 700);
  };

  componentDidMount() {
    this.getClickedItem();
  }

  render() {
    const { isLoading, clickedItems } = this.state;
    return (
      <>
        <Filter
          brandButtonHandler={this.brandButtonHandler}
          popupVisible={this.state.popupVisible}
          setPopupState={this.setPopupState}
          checkBoxHandler={this.checkBoxHandler}
          selectedBrands={this.state.selectedBrands}
        />
        {isLoading && <div>로딩 중 입니다.</div>}
        {!isLoading && clickedItems.length === 0 && (
          <div>클릭한 아이템이 없습니다.</div>
        )}
        {!isLoading && (
          <RecentProductList
            products={
              this.state.filteredItems.length > 0
                ? this.state.filteredItems
                : this.state.clickedItems
            }
          />
        )}
      </>
    );
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
