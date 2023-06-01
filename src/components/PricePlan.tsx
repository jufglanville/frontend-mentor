import React from 'react';
import styled from 'styled-components';
import { PriceType } from '../types';
import icon from '../assets/icon-music.svg';

interface Props {
  type: PriceType;
  amount: number;
  handleClick: (val: PriceType) => void;
}

type ButtonProps = {
  onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
};

const PricePlan = ({ type, amount, handleClick }: Props) => {
  return (
    <Container>
      <img src={icon} alt="Music Note" />
      <PriceContainer>
        <Heading>{type} Plan</Heading>
        <Text>${amount}/year</Text>
      </PriceContainer>
      <ActionLink
        onClick={() => handleClick(type === 'annual' ? 'monthly' : 'annual')}
      >
        Change
      </ActionLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--very-pale-blue);
  border-radius: 15px;
  width: 100%;
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 340px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const PriceContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-left: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
  @media (max-width: 340px) {
    margin: 1rem;
    text-align: center;
  }
`;

const ActionLink = styled.button<ButtonProps>`
  color: var(--bright-blue);
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: underline;
  margin-left: auto;
  &:hover {
    cursor: pointer;
    color: var(--desaturated-bright-blue);
  }
  @media (max-width: 340px) {
    margin: 0;
  }
`;

const Text = styled.p`
  color: var(--desaturated-blue);
  line-height: 1;
  letter-spacing: 0.5px;
`;

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  text-transform: capitalize;
  color: var(--dark-blue);
`;

export default PricePlan;
