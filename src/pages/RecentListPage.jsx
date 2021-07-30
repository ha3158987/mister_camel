import React, { Component } from 'react';

import { Filter, RecentProductList } from 'components/recentList';

class RecentListPage extends Component {
  state = {
    isLoading: true,
    clickedItems : []
  }

  render() {
    return (
      <>
      {
        this.state.isLoading
        ? <h1>로딩중입니다.</h1>
        : (
          this.state.clickedItems.length === 0
          ? <h1>클릭한 아이템이 없습니다.</h1>
          : <>
              <Filter />
              <RecentProductList products={this.state.clickedItems} />
            </>
        )
      }
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
          clickedItems: []
        })
      } else {
        this.setState({
          isLoading: false,
          clickedItems
        });
      }
    }, 1500);
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
