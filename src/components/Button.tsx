import React from 'react';
import styled from 'styled-components';

interface Props {
  type: 'button' | 'cancel';
  children: React.ReactNode;
}

const Button = ({ type, children }: Props) => {
  return <ButtonElement buttonType={type}>{children}</ButtonElement>;
};

const ButtonElement = styled.button<{ buttonType: 'button' | 'cancel' }>`
  background-color: ${(props) =>
    props.buttonType === 'button' ? 'var(--bright-blue)' : 'none'};
  color: ${(props) =>
    props.buttonType === 'button' ? 'white' : 'var(--desaturated-blue)'};
  padding: ${(props) => (props.buttonType === 'button' ? '1rem' : '0')};
  border-radius: 15px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  box-shadow: ${(props) =>
    props.buttonType === 'button'
      ? '0px 10px 20px rgba(116, 108, 233, 0.4)'
      : 'none'};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.buttonType === 'button'
        ? 'var(--desaturated-bright-blue)'
        : 'none'};
    color: ${(props) =>
      props.buttonType === 'button' ? 'white' : 'var(--dark-blue)'};
  }
`;

export default Button;
