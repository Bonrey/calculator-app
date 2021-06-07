import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';

const Screen = ({ expr }) => <Container>{expr}</Container>;
export default Screen;

const Container = styled.p`
  background-color: ${c.theme1['screen-bg']};
  color: ${c.theme1.text.light};
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
