import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, combineReducers } from 'redux';
import
import App from './components/App';

const store = createStore(combineReducers({ expressionReducer, themeReducer }));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
