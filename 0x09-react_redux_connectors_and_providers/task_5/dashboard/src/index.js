import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
