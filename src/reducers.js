import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Initial routing state
const routeInitialState = fromJS({
  location: null
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    default:
      return state;
  }
}

/**
 * Combines main reducer with injected reducers
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    ...injectedReducers
  });
}
