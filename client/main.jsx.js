import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import createStore from './createStore';
import App from './lib/Components/App.jsx';

const Root = () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
)

Meteor.startup(() => {
  render(<Root/>, document.getElementById('render-target'));
});
