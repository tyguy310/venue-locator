import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12vh;
`;
const VenueInfoWindow = props => {
  return (
    <Div>
      {props.venueInfo === null ? 'Pick a place' : props.venueInfo.title}
    </Div>
  );
};

export default VenueInfoWindow;
