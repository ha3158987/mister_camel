import React, { Component } from 'react';
import styled from '@emotion/styled';

const InputGroupStyle = styled.div`
  display: inline-block;

  & + & {
    margin-top: 5px;
  }

  & > input + label {
    margin-left: 5px;
  }
`;

class InputGroup extends Component {
  render() {
    const { children, type, name, value } = this.props;
    return (
      <InputGroupStyle>
        <input type={type} name={name} id={value} value={value} />
        <label htmlFor={value}>{children}</label>
      </InputGroupStyle>
    );
  }
}

export default InputGroup;
