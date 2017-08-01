/*
    ./app/root.js
    Defines the routes
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import App from './containers/app.jsx';

const history = createHashHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
