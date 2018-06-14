import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './lib/Components/App.jsx';

const Root = () => (
  <Provider>
    <App />
  </Provider>
)

Meteor.startup(() => {
  render(<Root/>, document.getElementById('render-target'));
});
