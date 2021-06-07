import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';
import { BtnRegular, BtnDelete, BtnReset, BtnEquals } from './Buttons';

const buttons = [
  '7', '8', '9',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '/', 'x'
];

const Grid = ({ onClick, theme }) => {
  return (
    <Container theme={theme}>
      {buttons.slice(0, 3).map(val => (
        <BtnRegular key={val} onClick={onClick} theme={theme}>{val}</BtnRegular>
      ))}
      <BtnDelete onClick={onClick} theme={theme}>Del</BtnDelete>
      {buttons.slice(3).map(val => (
        <BtnRegular key={val} onClick={onClick} theme={theme}>{val}</BtnRegular>
      ))}
      <BtnReset onClick={onClick} theme={theme}>Reset</BtnReset>
      <BtnEquals onClick={onClick} theme={theme}>=</BtnEquals>
    </Container>
  );
};
export default Grid;

const Container = styled.div`
  background-color: ${({ theme }) => c[theme]['toggle/keypad-bg']};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.375rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
`;
