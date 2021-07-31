import React, { Component } from 'react';

import { Filter, RecentProductList } from 'components/recentList';
import brands from '../utils/constants/brandName';
import { changeKoToEn } from '../utils/utilFunc';

const { GUCCI, NIKE, LOUIS_VUITTON, STONE_ISLAND } = brands;

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clickedItems: [],
      filteredItems: [],
      selectedBrands: [],
      popupVisible: false,
      hideCheckBoxState: false,
      brandState: {
        gucci: false,
        nike: false,
        louis_vuitton: false,
        stone_island: false,
      },
    };
  }

  // state = {
  //   isLoading: true,
  //   clickedItems: [],
  // };

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

  setBrandState = name => {
    // add
    !this.state.brandState[`${name}`] && this.addSelectedBrandList(name);
    // remove
    this.state.brandState[`${name}`] && this.removeSelectedBrandList(name);

    this.setState(state => {
      switch (name) {
        case GUCCI.EN:
          return {
            ...state,
            brandState: { ...state.brandState, gucci: !state.brandState.gucci },
          };
        case NIKE.EN:
          return {
            ...state,
            brandState: { ...state.brandState, nike: !state.brandState.nike },
          };
        case STONE_ISLAND.EN:
          return {
            ...state,
            brandState: {
              ...state.brandState,
              stone_island: !state.brandState.stone_island,
            },
          };
        case LOUIS_VUITTON.EN:
          return {
            ...state,
            brandState: {
              ...state.brandState,
              louis_vuitton: !state.brandState.louis_vuitton,
            },
          };
        default:
          break;
      }
    });

    this.makeClickedItemFiltered(!this.state.hideCheckBoxState);
  };

  makeClickedItemFiltered = isChecked => {
    this.setState(state => ({
      ...state,
      filteredItems: state.clickedItems.filter(({ brand, isInterested }) => {
        if (!isChecked) {
          // 숨기기 해제했을 때
          return state.selectedBrands.includes(changeKoToEn(brand));
        } else {
          // 숨기기 설정했을 때
          return state.selectedBrands.includes(changeKoToEn(brand));
        }
      }),
    }));
  };

  /* 체크박스 관련 기능 */
  hideNoInterest = () => {
    // 토글 버튼 상태 변경
    this.setState(state => ({
      ...state,
      hideCheckBoxState: !state.hideCheckBoxState,
    }));

    const flag = this.state.selectedBrands.length > 0;
    if (flag) {
      // 필터된 거
      this.state.hideCheckBoxState
        ? this.makeClickedItemFiltered(!this.state.hideCheckBoxState)
        : this.setState(state => ({
            ...state,
            filteredItems: state.filteredItems.filter(
              ({ isInterested }) => isInterested === true,
            ),
          }));
    } else {
      // 전체 목록
      this.state.hideCheckBoxState
        ? this.getClickedItem()
        : this.setState(state => ({
            clickedItems: state.clickedItems.filter(
              ({ isInterested }) => isInterested === true,
            ),
          }));
    }
  };

  sortRecentView = () => {
    const flag = this.state.selectedBrands.length > 0;
    if (flag) {
      // 필터된거
      this.makeClickedItemFiltered(!this.state.hideCheckBoxState);
    } else {
      // 전체 목록
      this.getClickedItem();
    }
    this.setPopupState();
  };

  sortRowPrice = () => {
    const flag = this.state.selectedBrands.length > 0;
    if (flag) {
      // 필터된거
      this.setState(state => ({
        ...state,
        filteredItems: state.filteredItems.sort((a, b) => a.price - b.price),
      }));
    } else {
      // 전체 목록
      this.setState(state => ({
        ...state,
        clickedItems: state.clickedItems.sort((a, b) => a.price - b.price),
      }));
    }
    this.setPopupState();
  };

  checkBoxHandler = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'hide_no_interest':
        this.hideNoInterest();
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

  setPopupState = () => {
    this.setState(state => ({
      ...state,
      popupVisible: !state.popupVisible,
    }));
  };

  render() {
    // return (
    //   <>
    //     {this.state.isLoading ? (
    //       <h1>로딩중입니다.</h1>
    //     ) : this.state.clickedItems.length === 0 ? (
    //       <h1>클릭한 아이템이 없습니다.</h1>
    //     ) : (
    //       <>
    //         <Filter
    //           setBrandState={this.setBrandState}
    //           brandState={this.state.brandState}
    //         />
    //         <RecentProductList products={this.state.clickedItems} />
    //       </>
    //     )}
    //   </>
    // );
    return (
      <>
        <Filter
          setBrandState={this.setBrandState}
          brandState={this.state.brandState}
          popupVisible={this.state.popupVisible}
          setPopupState={this.setPopupState}
          checkBoxHandler={this.checkBoxHandler}
        />
        {this.state.isLoading && <span>로딩 중 입니다.</span>}
        {!this.state.isLoading && this.state.clickedItems.length === 0 && (
          <span>클릭한 아이템이 없습니다.</span>
        )}
        <RecentProductList
          products={
            this.state.filteredItems.length > 0
              ? this.state.filteredItems
              : this.state.clickedItems
          }
        />
      </>
    );
  }

  getClickedItem = () => {
    const clickedItems = JSON.parse(localStorage.getItem('viewed'));
    //실제 API가 있을 경우, 비동기로 들어올 것을 고려해 시뮬레이팅함.
    setTimeout(() => {
      if (!clickedItems) {
        this.setState({
          isLoading: false,
          clickedItems: [],
        });
      } else {
        this.setState({
          isLoading: false,
          clickedItems,
        });
      }
    }, 1500);
  };

  componentDidMount() {
    this.getClickedItem();
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
