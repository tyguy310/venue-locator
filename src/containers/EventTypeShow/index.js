import React from 'react';
import Helmet from 'react-helmet';

import MapContainer from '../../components/MapContainer';
import VenueInfoWindow from '../../components/VenueInfoWindow';
import venuesArray from './venuesDataMock';
import Header from '../../components/Header';

class EventTypeShow extends React.Component {
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

  // This is bad and causes a memory leak; can result in trying to setState after component unmounts. FIX!!!
  componentWillMount() {
    this.getIPLocation();

    if ('geolocation' in navigator) {
      this.loadPosition();
    }
  }

  render() {
    const { eventtype } = this.props.match.params;

    return (
      <div>
        <Helmet>
          <title>{eventtype}</title>
          <meta name="description" content="Description of EventTypeShow" />
        </Helmet>
        <Header
          leftPath={''}
          btnLeftText={'Back'}
          headerText={eventtype}
          btnRightText={'Add Happy'}
          rightPath={'AddHappy'}
        />
        <MapContainer
          initCoords={this.state.coords}
          coords={this.state.coords}
          onMarkerChange={this.handleMarkerChange}
          onMapClick={this.handleMapClick}
          venuesArray={venuesArray}
        />
        <VenueInfoWindow venueInfo={this.state.selectedPlace} />
      </div>
    );
  }
}

export default EventTypeShow;
