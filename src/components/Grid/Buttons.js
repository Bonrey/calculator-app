import styled from 'styled-components';
import c from '../../styles/colors';

export const BtnRegular = styled.button.attrs(() => ({ type: 'button' }))`
  font-family: 'Spartan', sans-serif;
  font-size: 1rem;
  height: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => c[theme].keys['digit/op-bg']};
  color: ${({ theme }) => c[theme].text['digit/op']};
  box-shadow: inset 0 -0.125rem ${({ theme }) => c[theme].keys['digit/op-shadow']};
  border-radius: 0.2rem;
`;

export const BtnDelete = styled(BtnRegular)`
  text-transform: uppercase;
  font-size: 0.5rem;
  background-color: ${({ theme }) => c[theme].keys['del/reset-bg']};
  color: ${({ theme }) => c[theme].text['del/reset']};
  box-shadow: inset 0 -0.125rem ${({ theme }) => c[theme].keys['del/reset-shadow']};
`;

export const BtnReset = styled(BtnRegular)`
  grid-column: 1 / 3;
  text-transform: uppercase;
  font-size: 0.5rem;
  background-color: ${({ theme }) => c[theme].keys['del/reset-bg']};
  color: ${({ theme }) => c[theme].text['del/reset']};
  box-shadow: inset 0 -0.125rem ${({ theme }) => c[theme].keys['del/reset-shadow']};
`;

export const BtnEquals = styled(BtnRegular)`
  grid-column: 3 / 5;
  font-size: 0.75rem;
  background-color: ${({ theme }) => c[theme].keys['equals-bg']};
  color: ${({ theme }) => c[theme].text['equals']};
  box-shadow: inset 0 -0.125rem ${({ theme }) => c[theme].keys['equals-shadow']};
`;
