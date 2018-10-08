import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { compose } from 'redux';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(
  devTools
)

const store = configureStore(enhancer);



ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
// registerServiceWorker();
