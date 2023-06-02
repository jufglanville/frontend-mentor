import React, { useState } from 'react';
import styled from 'styled-components';
import PricePlan from './PricePlan';
import { PricePlanMap } from '../types';

interface Props {
  plans: PricePlanMap;
  selected: string;
  onHandleClick: (val: string) => void;
}

const PricePage = ({ plans, selected, onHandleClick }: Props) => {
  return (
    <Container>
      {Object.values(plans).map((plan) => (
        <PricePlan
          key={plan.id}
          plan={plan}
          selected={selected === plan.id}
          onHandleClick={(id) => onHandleClick(id)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export default PricePage;
