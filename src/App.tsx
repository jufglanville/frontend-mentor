import React, { useState } from 'react';
import styled from 'styled-components';
import PriceCard from './components/PriceCard';

import background from './assets/pattern-background-desktop.svg';
import hero from './assets/illustration-hero.svg';

const pricePlanObj = {
  annual: {
    heading: 'Annual Plan',
    text: '$59.99/year',
  },
  monthly: {
    heading: 'Monthly Plan',
    text: '$6.99/month',
  },
};

const App = () => {
  const [pricePlan, setPricePlan] = useState(pricePlanObj.annual);

  return (
    <Body>
      <PriceCard
        pricePlan={pricePlan}
        image={hero}
        heading="Order Summary"
        text="You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!"
      />
    </Body>
  );
};

const Body = styled.div`
  min-height: 100vh;
  background-color: var(--pale-blue);
  background-image: url(${background});
  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default App;
