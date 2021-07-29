import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Body = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #dcdcdc;
  }

  main {
    padding: 20px 0;
  }
`;

class AppLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Body>
        <header>
          <h1>
            <Link to="/">로고</Link>
          </h1>
          <p>
            <Link to="/recentList">최근</Link>
          </p>
        </header>
        <main>{children}</main>
      </Body>
    );
  }
}

export default AppLayout;
