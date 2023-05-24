import React from 'react';
import styled from 'styled-components';
import SummaryCard from './components/SummaryCard';

import background from './assets/pattern-background-desktop.svg';

const App = () => {
  return (
    <Body>
      <SummaryCard />
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
