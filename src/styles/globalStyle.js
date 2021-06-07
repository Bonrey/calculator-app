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

    @media only screen and (max-width: 320px) {
      font-size: 10vw;
    }
  }

  body {
    min-height: 100%;
    background-color: ${({ theme }) => c[theme]['main-bg']};
    padding: 0.875rem;
  }
`;
