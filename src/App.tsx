import React from 'react';
import GlobalStyle from './globalStyles';
import { ApiProvider } from './providers/api';

import Header from './components/header/header';
import Footer from './components/footer/Footer';

import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';

import styled from 'styled-components';

function App() {

  const MainContainer = styled.main`
  
    height: 70vh;
    display: flex;
    background-color: aliceblue;
    justify-content: space-evenly;
    align-content: center;
  `
  
  return (
    <>
    <ApiProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Router />
        </MainContainer>
      </BrowserRouter>
      <Footer />
      </ApiProvider>
    </>
  );
}

export default App;
