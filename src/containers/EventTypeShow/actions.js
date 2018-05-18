import axios from 'axios';
import { FETCH_IP_COORDS, FETCH_GEO_COORDS } from './constants';

export function fetchIPCoords() {
  const coords = axios.get('http://ip-api.com/json');
  console.log('fetchIPCoords');
  return {
    type: FETCH_IP_COORDS,
    payload: coords
  };
}

export function fetchGeoCoords() {
  const coords = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  console.log('fetchGeoCoords');
  return {
    type: FETCH_GEO_COORDS,
    payload: coords
  };
}
