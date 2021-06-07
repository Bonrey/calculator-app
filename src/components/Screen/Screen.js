import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';

const Screen = ({ expr, theme }) => <Container theme={theme}>{expr}</Container>;
export default Screen;

const Container = styled.p`
  background-color: ${({ theme }) => c[theme]['screen-bg']};
  color: ${({ theme }) => c[theme].text['logo/screen']};
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
