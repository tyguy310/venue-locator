import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  background-color: #520e6f;
  color: #bb8f00;
  grid-template-columns: 1fr 4fr 1fr;
  text-align: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #bb8f00;
  text-decoration: none;
`;

const H1 = styled.h1`
  font-family: 'Fontdiner swanky', cursive;
`;

const Header = props => {
  return (
    <StyledHeader>
      <StyledLink to={`/${props.leftPath}`}>{props.btnLeftText}</StyledLink>
      <H1>{props.headerText}</H1>
      <StyledLink to={`/${props.rightPath}`}>{props.btnRightText}</StyledLink>
    </StyledHeader>
  );
};

export default Header;
