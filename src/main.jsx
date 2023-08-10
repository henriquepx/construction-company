import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './GlobalStyles';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);