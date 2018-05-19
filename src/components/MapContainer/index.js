/**
 *
 * MapContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: '100%',
      height: '75vh',
      marginLeft: 'auto',
      marginRight: 'auto'
    };

    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={this.props.initCoords}
        center={this.props.coords}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={'Here'}
          position={this.props.coords}
          name={'Home'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.element
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDowSMxTsqXVrzWpKk1IfsADisPQ8Pf_Xk'
})(MapContainer);
