import React from 'react';
import Helmet from 'react-helmet';

import { H1, StyledLink } from './styles';
import MapContainer from '../../components/MapContainer';
import VenueInfoWindow from '../../components/VenueInfoWindow';

export default class EventTypeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: localStorage.getItem('latitude')
          ? localStorage.getItem('latitude')
          : null,
        lng: localStorage.getItem('longitude')
          ? localStorage.getItem('longitude')
          : null
      },
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
    this.handleMarkerChange = this.handleMarkerChange.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMarkerChange = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  handleMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: null
      });
    }
  };

  loadPosition = async () => {
    try {
      const position = await this.geoCoords();
      const { latitude, longitude } = position.coords;
      localStorage.setItem('latitude', latitude);
      localStorage.setItem('longitude', longitude);
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
    fetch('https://ipapi.co/json')
      .then(response => response.json())
      .then(data => {
        const { latitude, longitude } = data;
        this.setState({
          coords: {
            lat: latitude,
            lng: longitude
          }
        });

        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude);
      })
      .catch(err => console.error(err));
  }

  geoCoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  componentDidMount() {
    this.getIPLocation();

    if ('geolocation' in navigator) {
      this.loadPosition();
    }
  }

  render() {
    const { eventtype } = this.props.match.params;

    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <StyledLink to="/">Back</StyledLink>
        <H1>{eventtype}</H1>
        <MapContainer
          initCoords={this.state.coords}
          coords={this.state.coords}
          onMarkerChange={this.handleMarkerChange}
          onMapClick={this.handleMapClick}
        />
        <VenueInfoWindow venueInfo={this.state.selectedPlace} />
      </div>
    );
  }
}
