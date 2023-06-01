import React from 'react';
import styled from 'styled-components';

interface Props {
  type: 'primary' | 'button';
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ type, children, onClick }: Props) => {
  return (
    <ButtonElement buttonType={type} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<{ buttonType: 'primary' | 'button' }>`
  background-color: ${(props) =>
    props.buttonType === 'primary' ? 'var(--bright-blue)' : 'none'};
  color: ${(props) =>
    props.buttonType === 'primary' ? 'white' : 'var(--desaturated-blue)'};
  padding: ${(props) => (props.buttonType === 'primary' ? '1rem' : '0')};
  border-radius: 15px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  box-shadow: ${(props) =>
    props.buttonType === 'primary'
      ? '0px 10px 20px rgba(116, 108, 233, 0.4)'
      : 'none'};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.buttonType === 'primary'
        ? 'var(--desaturated-bright-blue)'
        : 'none'};
    color: ${(props) =>
      props.buttonType === 'primary' ? 'white' : 'var(--dark-blue)'};
  }
`;

export default Button;
