import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';

const Answer = () => <Screen>0</Screen>;
export default Answer;

const Screen = styled.p`
  background-color: ${c.theme1['screen-bg']};
  color: ${c.theme1.text.light};
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  text-align: right;
`;
