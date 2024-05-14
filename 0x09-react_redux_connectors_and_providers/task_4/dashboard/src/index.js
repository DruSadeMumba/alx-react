import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import { uiReducer, initialState } from './reducers/uiReducer';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import { thunk } from 'redux-thunk';

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, Map(initialState), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
