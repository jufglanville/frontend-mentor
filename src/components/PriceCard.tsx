import React, { useState } from 'react';
import styled from 'styled-components';
import { PricePlanTemplate, PricePlans } from '../types';
import hero from '../assets/illustration-hero.svg';
import icon from '../assets/icon-music.svg';
import PricePlanList from './PricePlanList';
import Button from './Button';

const pricePlan: PricePlans = [
  {
    id: 'id1',
    name: 'Annual Plan',
    type: 'year',
    amount: 59.99,
  },
  {
    id: 'id2',
    name: 'Monthly Plan',
    type: 'month',
    amount: 6.99,
  },
];

const pricePlanTemplate: PricePlanTemplate = {
  actionLabel: 'Change',
  icon: icon,
  altText: 'Music Note',
  currency: '$',
  plans: pricePlan,
};

const SummaryCard = () => {
  const [selectedPlan, setSelectedPlan] = useState('id1');

  return (
    <Card>
      <img src={hero} alt="placeholder" />
      <Content>
        <Heading>Order Summary</Heading>
        <Text>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Text>
        <PricePlanList
          template={pricePlanTemplate}
          selected={selectedPlan}
          onSelect={(val) => setSelectedPlan(val)}
        />
        <Button type="primary" onClick={() => console.log('clicked')}>
          Proceed to Payment
        </Button>
        <Button type="button" onClick={() => console.log('cancel')}>
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

const Heading = styled.h1`
  font-size: 1.8rem;
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

// const Button = styled.button`
//   background-color: var(--bright-blue);
//   color: white;
//   padding: 1rem;
//   border-radius: 15px;
//   width: 100%;
//   text-align: center;
//   font-weight: 700;
//   font-size: 0.85rem;
//   letter-spacing: 0.5px;
//   box-shadow: 0px 10px 20px rgba(116, 108, 233, 0.4);
//   &:hover {
//     cursor: pointer;
//     background-color: var(--desaturated-bright-blue);
//   }
// `;

const Cancel = styled.button`
  color: var(--desaturated-blue);
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  &:hover {
    cursor: pointer;
    color: var(--dark-blue);
  }
`;

export default SummaryCard;
