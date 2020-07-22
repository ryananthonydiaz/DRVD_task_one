import React from 'react';
import useDimensionStore from './state/useDimensionStore';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';

import * as serviceWorker from './serviceWorker';

const { DimensionProvider } = useDimensionStore();

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
