import { FETCH_GEO_COORDS, FETCH_IP_COORDS } from './constants';

export default function(state = { lat: 41.8, lng: -87.7 }, action) {
  switch (action.type) {
    case FETCH_GEO_COORDS:
      return { state, userCoords: action.payload.coords };
    case FETCH_IP_COORDS:
      return { state, userCoords: action.payload.coords };
    default:
      return state;
  }
}
