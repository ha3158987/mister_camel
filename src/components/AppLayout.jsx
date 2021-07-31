import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/mr.camel_logo.png';

import styled from '@emotion/styled';

const Body = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: white;
    border-bottom: solid 2px rgba(0, 0, 0, 0.34);
    img {
      width: 70px;
    }
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
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/recentList">
            <span>최근</span>
          </Link>
        </header>
        <main>{children}</main>
      </Body>
    );
  }
}

export default AppLayout;
