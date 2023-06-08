import React from 'react';
import styled from 'styled-components';
import PricePlan from './PricePlan';
import { PricePlanTemplate, PricePlans } from '../types';

interface Props {
  template: PricePlanTemplate;
  selected: string;
  onSelect: (val: string) => void;
}

const PricePlanList = ({ template, selected, onSelect }: Props) => {
  return (
    <Container>
      {Object.values(template.plans).map((plan) => (
        <PricePlan
          actionLabel={template.actionLabel}
          icon={template.icon}
          altText={template.altText}
          currency={template.currency}
          key={plan.id}
          plan={plan}
          selected={selected === plan.id}
          onSelect={(id) => onSelect(id)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export default PricePlanList;
