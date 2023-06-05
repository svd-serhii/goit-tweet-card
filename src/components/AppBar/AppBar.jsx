import React from 'react';
import { Header } from './AppBar.styled';
import NavBar from 'components/NavBar/NavBar';
import Container from 'components/Container/Container';

const AppBar = () => {
  return (
    <Container>
      <Header>
        <NavBar />
      </Header>
    </Container>
  );
};

export default AppBar;
