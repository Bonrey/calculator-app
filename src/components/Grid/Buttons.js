import styled from 'styled-components';
import c from '../../styles/colors';

export const BtnRegular = styled.button.attrs(() => ({ type: 'button' }))`
  font-family: 'Spartan', sans-serif;
  font-size: 1rem;
  height: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${c.theme1.keys['digit/op-bg']};
  color: ${c.theme1.text.dark};
  box-shadow: inset 0 -0.125rem ${c.theme1.keys['digit/op-shadow']};
  border-radius: 0.2rem;
`;

export const BtnDelete = styled(BtnRegular)`
  text-transform: uppercase;
  font-size: 0.5rem;
  background-color: ${c.theme1.keys['del/reset-bg']};
  color: ${c.theme1.text.light};
  box-shadow: inset 0 -0.125rem ${c.theme1.keys['del/reset-shadow']};
`;

export const BtnReset = styled(BtnRegular)`
  grid-column: 1 / 3;
  text-transform: uppercase;
  font-size: 0.5rem;
  background-color: ${c.theme1.keys['del/reset-bg']};
  color: ${c.theme1.text.light};
  box-shadow: inset 0 -0.125rem ${c.theme1.keys['del/reset-shadow']};
`;

export const BtnEquals = styled(BtnRegular)`
  grid-column: 3 / 5;
  font-size: 0.75rem;
  background-color: ${c.theme1.keys['equals-bg']};
  color: ${c.theme1.text.light};
  box-shadow: inset 0 -0.125rem ${c.theme1.keys['equals-shadow']};
`;
