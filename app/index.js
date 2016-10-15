import 'babel-polyfill';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './styles.css'
import App from './containers/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
