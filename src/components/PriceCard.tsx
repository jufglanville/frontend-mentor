import React from 'react';
import styled from 'styled-components';

import icon from '../assets/icon-music.svg';

type PricePlan = {
  heading: string;
  text: string;
};

interface Props {
  pricePlan: PricePlan;
  image: string;
  heading: string;
  text: string;
}

const PriceCard = ({ pricePlan, image, heading, text }: Props) => {
  return (
    <Card>
      <img src={image} alt="placeholder" />
      <Content>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
        <PricePlan>
          <img src={icon} alt="Music Note" />
          <PlanContainer>
            <PlanHeading>{pricePlan.heading}</PlanHeading>
            <PlanText>{pricePlan.text}</PlanText>
          </PlanContainer>
          <Change>Change</Change>
        </PricePlan>
        <Button>Proceed to Payment</Button>
        <Cancel>Cancel Order</Cancel>
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

const Button = styled.button`
  background-color: var(--bright-blue);
  color: white;
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  box-shadow: 0px 10px 20px rgba(116, 108, 233, 0.4);
  &:hover {
    cursor: pointer;
    background-color: var(--desaturated-bright-blue);
  }
`;

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

const Change = styled.button`
  color: var(--bright-blue);
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: underline;
  margin-left: auto;
  &:hover {
    cursor: pointer;
    color: var(--desaturated-bright-blue);
    text-decoration: none;
  }
  @media (max-width: 340px) {
    margin: 0;
  }
`;

export default PriceCard;
