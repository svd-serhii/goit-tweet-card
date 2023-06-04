import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const NavBarLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: bold;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  padding: 12px;

  color: #471ca9;
  transition: 250ms ease-in;

  :hover {
    color: #5736a3;
    scale: 1.1;
  }
`;
