import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../components/App/AppComponent';
import Main from '../components/Main/MainComponent';

const history = createBrowserHistory();

const routes = () => (
  <Router history={history}>
    <App>
      <Route exact path="/" component={Main} />
    </App>
  </Router>
);

export default routes;
