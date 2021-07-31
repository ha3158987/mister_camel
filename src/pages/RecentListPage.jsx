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

    this.setState(state => ({
      ...state,
      filteredItems: state.clickedItems.filter(({ brand }) =>
        state.selectedBrands.length > 0
          ? state.selectedBrands.includes(changeKoToEn(brand))
          : true,
      ),
    }));
    console.log(`${name} 클릭`);
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

  componentDidMount() {
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
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
