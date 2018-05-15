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
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: null,
        lng: null
      }
    };
  }

  loadPosition = async () => {
    try {
      const position = await this.geoCoords();
      const { latitude, longitude } = position.coords;
      this.setState({
        coords: {
          lat: latitude,
          lng: longitude
        }
      });
    } catch (error) {
      this.getIPLocation();
    }
  };

  getIPLocation() {
    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => {
        const { lat, lon } = data;
        this.setState({
          coords: {
            lat: lat,
            lng: lon
          }
        });
      })
      .catch(err => console.error(err));
  }

  geoCoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      this.loadPosition();
    } else {
      this.getIPLocation();
    }
  }

  render() {
    const { eventtype } = this.props.match.params;
    // const { coords: { latitude, longitude } } = this.props.location;
    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <H1>{eventtype}</H1>
        <MapContainer coords={this.state.coords} />
      </div>
    );
  }
}
