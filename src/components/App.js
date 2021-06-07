import React from 'react';
import { globalStyle as GlobalStyle } from '../styles/globalStyle';
import Header from './Header/Header';
import Answer from './Answer/Answer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Answer />
    </>
  );
}

export default App;
