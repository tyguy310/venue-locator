/**
 *
 * MapContainer
 *
 */

import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import _ from 'lodash';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showingInfoWindow: false,
    };
    // binding this to event-handler functions
    this.markerClick = this.markerClick.bind(this);
    this.mapClick = this.mapClick.bind(this);
  }

  markerClick(props, marker) {
    this.props.onMarkerChange(props, marker);
  }

  mapClick() {
    this.props.onMapClick();
  }

  venuesArray = [
    {
      coords: {
        lat: 41.921875,
        lng: -87.659384
      },
      name: 'Derby Bar & Grill',
      markerLabel: 'HH',
      type: 'Happy Hour'
    },
    {
      coords: {
        lat: 41.923126,
        lng: -87.645305
      },
      name: 'Lion Head Pub',
      markerLabel: 'HH',
      type: 'Happy Hour'
    }
  ];

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
        onClick={this.mapClick}
        zoom={14}
        initialCenter={this.props.initCoords}
        center={this.props.coords}
      >
        <Marker title={'I am here'} position={this.props.coords} />

        {this.venuesArray.map(venue => (
          <Marker
            position={venue.coords}
            onClick={this.markerClick}
            title={venue.name}
            key={venue.name}
            label={venue.markerLabel}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDowSMxTsqXVrzWpKk1IfsADisPQ8Pf_Xk'
})(MapContainer);
