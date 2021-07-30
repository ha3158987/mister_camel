import React, { Component } from 'react';

import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  padding: 10px;
  background: #dcdcdc;

  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { children, onClick, name, ariaLabel } = this.props;

    return (
      <ButtonStyle
        type="button"
        onClick={onClick}
        name={name}
        aria-label={ariaLabel}
      >
        {children}
      </ButtonStyle>
    );
  }
}

export default Button;
