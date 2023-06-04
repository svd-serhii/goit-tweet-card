import React from 'react';
import { Nav, NavBarLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <NavBarLink to="/" exact="true">
        Main
      </NavBarLink>
      <NavBarLink to="/tweets" exact="true">
        More Tweets
      </NavBarLink>
    </Nav>
  );
};

export default NavBar;
