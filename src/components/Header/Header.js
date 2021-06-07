import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ onChange, theme }) => {
  return (
    <Container theme={theme}>
      <Logo />
      <ThemeSwitcher onChange={onChange} theme={theme} />
    </Container>
  );
};
export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => c[theme].text['logo/screen']};
`;
