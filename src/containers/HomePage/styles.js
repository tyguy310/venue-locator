import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  width: calc(50% - 3rem);
  border: 2px solid #520e6f;
  margin: 1rem;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(82, 14, 111, 0.3);
  transition: 0.3s;
  text-transform: uppercase;
  display: flex;
  height: 30vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-family: 'Fontdiner swanky', cursive;

  &:hover {
    background-color: rgba(82, 14, 111, 0.5);
  }
`;

const NavList = styled.ul`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-padding-start: 0;
  justify-content: center;
`;

const H1 = styled.h1`
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: #520e6f;
  color: #bb8f00;
  padding: 1rem;
  font-family: 'Fontdiner swanky', cursive;
`;

export { StyledLink, H1, NavList };
