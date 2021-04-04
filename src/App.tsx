import MainPage from 'pages/MainPage';
import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
};

export default App;
