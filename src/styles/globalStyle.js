import { createGlobalStyle } from 'styled-components';
import c from './colors';

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Spartan', sans-serif;
    font-size: 32px;
    font-weight: bold;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    height: 100%;
    background-color: ${c.theme1['main-bg']};
    margin: 0.875rem;
  }
`;
