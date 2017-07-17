import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <AppContainer store={store} history={history} />,
    document.getElementById('root'),
);
