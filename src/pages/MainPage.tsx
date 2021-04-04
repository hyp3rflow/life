import GameContainer from 'containers/GameContainer';
import React from 'react';
import styled from 'styled-components';

const PageTemplate = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const MainPage: React.FC = () => {
  return (
    <PageTemplate>
      <h1>hyp3rflow/life</h1>
      <GameContainer />
    </PageTemplate>
  );
};

export default MainPage;
