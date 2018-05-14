import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MapContainer from '../../components/MapContainer';

const H1 = styled.h1`
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: #520e6f;
  color: #bb8600;
  padding: 1rem;
  font-family: 'Fontdiner swanky', cursive;
`;

export default class EventTypeShow extends React.Component {
  render() {
    const { eventtype } = this.props.match.params;
    // const { coords: { latitude, longitude } } = this.props.location;
    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <H1>
          {eventtype}
          {/* <div>Coords: {this.props.userlocation}</div> */}
          {/* <div>{longitude}</div> */}
        </H1>
        <MapContainer />
      </div>
    );
  }
}
