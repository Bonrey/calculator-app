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
    <Container>
      {buttons.slice(0, 3).map(val => <BtnRegular key={val} onClick={onClick}>{val}</BtnRegular>)}
      <BtnDelete onClick={onClick}>Del</BtnDelete>
      {buttons.slice(3).map(val => <BtnRegular key={val} onClick={onClick}>{val}</BtnRegular>)}
      <BtnReset onClick={onClick}>Reset</BtnReset>
      <BtnEquals onClick={onClick}>=</BtnEquals>
    </Container>
  );
};
export default Grid;

const Container = styled.div`
  background-color: ${c.theme1['keypad-bg']};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.375rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
`;
