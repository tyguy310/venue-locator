/*
 * HomePage
 */

import React from 'react';

import { NavList, StyledLink } from './styles.js';
import Header from '../../components/Header';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header
          headerText={"Let's Get Happy!"}
          btnRightText={'Add Happy'}
          rightPath={'AddHappy'}
        />
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
