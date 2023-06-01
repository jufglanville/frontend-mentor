import React from 'react';
import styled from 'styled-components';
import PriceCard from './components/PriceCard';

import background from './assets/pattern-background-desktop.svg';
import hero from './assets/illustration-hero.svg';

const App = () => {
  return (
    <Body>
      <PriceCard
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
