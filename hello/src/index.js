import React from 'react';
import ReactDOM from 'react-dom';
import Routers from 'routers';
import App from 'containers/App';

const routes = [
  { path: '/',
    component: App
  }
];
ReactDOM.render(
  <Routers routes={routes} />,
    document.getElementById('root')
);
