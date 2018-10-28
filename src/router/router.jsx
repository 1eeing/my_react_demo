import React from "react";
import Proptypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../view/App';
import {Provider} from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

Root.Proptypes = {
  store: Proptypes.object.isRequired
};

export default Root;