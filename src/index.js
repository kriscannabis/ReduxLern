import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import combineReducers from './store/reducers/index';
import { createStore } from 'redux';

const initialState = {
  "counterReducer":{
    count:0
  }
};

let store = createStore(combineReducers, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
