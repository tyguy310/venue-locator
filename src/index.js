import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import './global-styles';
import App from './containers/App/';
import registerServiceWorker from './registerServiceWorker';

// import configureStore from './configureStore';
// const initialState = {};
// const history = createHistory();
// const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');
WebFont.load({
  google: {
    families: ['Nunito', 'Fontdiner Swanky', 'sans-serif']
  }
});
ReactDOM.render(
  // <Provider store={store}>
  // <ConnectedRouter history={history}>
  <App />,
  // </ConnectedRouter>
  // </Provider>
  MOUNT_NODE
);
registerServiceWorker();
