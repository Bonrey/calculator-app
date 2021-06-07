import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';

const ThemeSwitcher = ({ onChange, theme }) => {
  return (
    <Container>
      <Legend>Theme</Legend>
      <RadioGroup theme={theme}>
        <Label htmlFor="theme1">1</Label>
        <Radio id="theme1" value="1" onChange={onChange} defaultChecked />
        <Label htmlFor="theme2">2</Label>
        <Radio id="theme2" value="2" onChange={onChange} />
        <Label htmlFor="theme3">3</Label>
        <Radio id="theme3" value="3" onChange={onChange} />
      </RadioGroup>
    </Container>
  );
};
export default ThemeSwitcher;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Legend = styled.p`
  font-size: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  margin-right: 0.6rem;
`;

const RadioGroup = styled.div`
  background-color: ${({theme}) => c[theme]['toggle-bg']};
  height: 0.8rem;
  box-sizing: border-box;
  padding: 0.1rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  font-size: 0.3rem;
  top: -0.5rem;

  &:first-of-type {
    right: 1.7rem;
  }

  &:last-of-type {
    right: 0.3rem;
  }
`;

const Radio = styled.input.attrs(() => ({
  type: 'radio',
  name: 'theme-switch'
}))`
  appearance: none;
  outline: none;
  background-color: ${c.theme1['toggle-bg']};
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.05rem;

  &:checked {
    background-color: ${c.theme1['radio-bg']};
  }
`;
