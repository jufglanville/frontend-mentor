import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import icon from '../assets/icon-music.svg';
import hero from '../assets/illustration-hero.svg';

const SummaryCard = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Card>
      <img src={hero} alt="placeholder" />
      <Content>
        <Heading>Order Summary</Heading>
        <Text>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Text>
        <PricePlan>
          <img src={icon} alt="Music Note" />
          <PlanContainer>
            <PlanHeading>Annual Plan</PlanHeading>
            <PlanText>$59.99/year</PlanText>
          </PlanContainer>
          <Change>Change</Change>
        </PricePlan>
        <Button type="primary" onClick={handleClick}>
          Proceed to Payment
        </Button>
        <Button type="button" onClick={handleClick}>
          Cancel Order
        </Button>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 15px;
  background-color: white;
  width: 450px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(116, 108, 233, 0.4);
`;

const Content = styled.div`
  display: grid;
  gap: 1.75rem;
  padding: 3rem;
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const PlanContainer = styled.div`
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

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: var(--dark-blue);
`;

const PlanHeading = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  color: var(--dark-blue);
`;

const Text = styled.p`
  text-align: center;
  color: var(--desaturated-blue);
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const PlanText = styled(Text)`
  line-height: 1;
`;

const PricePlan = styled.div`
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

const Change = styled.button`
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

export default SummaryCard;
