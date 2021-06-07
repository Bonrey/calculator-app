import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';

const ThemeSwitcher = () => {
  return (
    <Container>
      <Legend>Theme</Legend>
      <RadioGroup>
        <Label for="theme1">1</Label>
        <Radio id="theme1" value="1" defaultChecked />
        <Label for="theme2">2</Label>
        <Radio id="theme2" value="2" />
        <Label for="theme3">3</Label>
        <Radio id="theme3" value="3" />
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
  background-color: ${c.theme1['toggle-bg']};
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
