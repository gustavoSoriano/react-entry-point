import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ title, onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>{title || children}</StyledButton>
  );
}

export default Button;