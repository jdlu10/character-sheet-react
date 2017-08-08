/*
    ./app/index.js
*/
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import characterManApp from './reducers';

import Root from './root.jsx';

require('rc-slider/assets/index.css');
require('./styles/app.scss');

const store = createStore(characterManApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Root store={store} />,
  document.getElementById('root')
);
