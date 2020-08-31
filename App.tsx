import React from 'react';
import {Provider} from 'react-redux'
import Router from './Router'
import store from './helpers/Store'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}


