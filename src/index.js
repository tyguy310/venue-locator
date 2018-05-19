import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './global-styles';
import App from './containers/App/';
import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root');
WebFont.load({
  google: {
    families: ['Nunito', 'Fontdiner Swanky', 'sans-serif']
  }
});
ReactDOM.render(<App />, MOUNT_NODE);
registerServiceWorker();
