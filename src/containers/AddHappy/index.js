import React, { Component } from 'react';
import Header from '../../components/Header';

import LocationSearchInput from '../LocationSearchInput';

class AddHappy extends Component {
  render() {
    return (
      <div>
        <Header
          leftPath={''}
          btnLeftText={'Home'}
          headerText={'Add Venue/Menu'}
        />
        <LocationSearchInput />
      </div>
    );
  }
}

export default AddHappy;
