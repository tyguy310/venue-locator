/*
 * HomePage
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  width: calc(50% - 6rem);
  border: 2px solid #520e6f;
  margin: 2rem;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(82, 14, 111, 0.3);
  transition: 0.3s;
  text-transform: uppercase;
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
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

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <H1>Let's Get Happy!</H1>
        <NavList>
          <StyledLink to="/HappyHour">Happy Hour</StyledLink>
          <StyledLink to="/LateNight">Late Night</StyledLink>
          <StyledLink to="/DailySpecials">Daily Specials</StyledLink>
          <StyledLink to="/Brunch">Brunch</StyledLink>
        </NavList>
      </div>
    );
  }
}
