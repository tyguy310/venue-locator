import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import MapContainer from '../../components/MapContainer';
import HomePage from '../HomePage';
import EventTypeShow from '../EventTypeShow';
import './styles.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:eventtype" component={EventTypeShow} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
      {/* <MapContainer /> */}
    </div>
  );
}
