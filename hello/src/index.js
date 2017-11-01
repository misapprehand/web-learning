import React from 'react';
import ReactDOM from 'react-dom';
import Routers from 'routers';
import App from 'containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const routes = [
  { path: '/',
    component: App
  }
];
ReactDOM.render(
  <Routers routes={routes} />,
    document.getElementById('root')
);
