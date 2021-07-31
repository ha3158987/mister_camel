import { Component } from 'react';

import List from 'components/common/List';
import ListItem from 'components/common/ListItem';

class RecentProductList extends Component {

  state = {
    isClicked: new Array(this.props.products.length).fill(false)
  }

  handleNotInterestedItemClick = (idx) => {
    const clickedArr = [...this.state.isClicked];
    clickedArr[idx] = true;
    console.log(clickedArr)
    this.setState({isClicked: clickedArr})
  }

  render() {
    const { products } = this.props;

    return (
      <List>
        {products.map(({ title, isInterested, brand, price }, index) => (
          <ListItem key={index} title={title} isInterested={isInterested} brand={brand} price={price} onClick={() => this.handleNotInterestedItemClick(index)} isClicked={this.state.isClicked[index]}/>
        ))}
      </List>
    );
  }
}

export default RecentProductList;
