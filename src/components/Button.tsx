import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 12px;
  font-weight: 600;
  color: #fff;
  background-color: #495057;
  transiton: background-color 0.5s ease;

  &:hover {
    background-color: #868e96;
  }

  &:active {
    background-color: #343a40;
  }

  &:nth-of-type(n + 2) {
    margin-left: 14px;
  }
`;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
