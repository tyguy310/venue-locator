import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: #520e6f;
  color: #bb8600;
  padding: 1rem;
  font-family: 'Fontdiner swanky', cursive;
`;

const StyledLink = styled(Link)`
  position: absolute;
  color: #bb8600;
  text-decoration: none;
  top: 4vh;
  left: 1rem;
`;

export { H1, StyledLink };
