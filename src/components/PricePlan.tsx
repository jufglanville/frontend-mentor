import React from 'react';
import styled from 'styled-components';

import icon from '../assets/icon-music.svg';

const PricePlan = () => {
  return (
    <Container>
      <img src={icon} alt="Music Note" />
      <PriceContainer>
        <Heading>Annual Plan</Heading>
        <Text>$59.99/year</Text>
      </PriceContainer>
      <ActionLink>Change</ActionLink>
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
  }
`;

const ActionLink = styled.button`
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
  text-align: center;
  color: var(--desaturated-blue);
  line-height: 1;
  letter-spacing: 0.5px;
`;

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  color: var(--dark-blue);
`;

export default PricePlan;
