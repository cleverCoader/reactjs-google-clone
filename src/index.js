import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { initialState } from './reducer';
// import * as serviceWorker from './ServiceWorker';
import reducer, { initialState } from './reducer';
import { StateProvider } from "./StateProvider";


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />

    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

