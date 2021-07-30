import React, { Component } from 'react';

import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  padding: 10px;
  background: #dcdcdc;

  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <ButtonStyle type="button" onClick={onClick}>
        {children}
      </ButtonStyle>
    );
  }
}

export default Button;
