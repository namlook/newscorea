
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store';

import 'semantic-ui-css/semantic.css';
import 'odyssee-client/src/styles/styles.scss';
// import 'odyssee-client/lib/styles.css';
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);