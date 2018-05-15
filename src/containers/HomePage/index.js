/*
 * HomePage
 */

import React from 'react';

import { H1, NavList, StyledLink } from './styles.js';

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
