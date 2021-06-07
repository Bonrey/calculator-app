import React from 'react';
import styled from 'styled-components';
import c from '../../styles/colors';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ThemeSwitcher />
    </Container>
  );
};
export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${c.theme1.text.light};
`;
