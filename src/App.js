import React from 'react';
import Cards from './components/Cards';
import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import { gray } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    color: ${gray.n800};
    margin: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <div className='App'>
      <Header />
      <Cards>
        <Card />
        <Card />
      </Cards>
    </div>
  </>
);

export default App;
