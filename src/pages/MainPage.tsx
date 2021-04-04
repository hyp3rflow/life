import GameContainer from 'containers/GameContainer';
import React from 'react';
import styled from 'styled-components';

const PageTemplate = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  & > *:nth-of-type(n + 1) {
    margin-top: 8px;
  }
`;

const PageTitle = styled.h1`
  font-weight: 800;
`;

const PageLink = styled.a`
  display: block;
  text-decoration: underline;

  :hover {
    color: red;
  }
`;

const MainPage: React.FC = () => {
  return (
    <PageTemplate>
      <PageTitle>hyp3rflow/life</PageTitle>
      <PageLink href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        What is this?
      </PageLink>
      <GameContainer />
    </PageTemplate>
  );
};

export default MainPage;
