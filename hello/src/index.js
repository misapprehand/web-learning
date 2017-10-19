import React from 'react';
import ReactDOM from 'react-dom';
import createCalc from 'calc/calc';
import createBootstrap from 'bootstrap_demo/index';
import Routers from 'routers';
import App from './containers/App';

const routes = [
  { path: '/',
    component: App
  }
];
ReactDOM.render(
  <Routers routes={routes} />,
    document.getElementById('root')
);
/*
const content = document.getElementById('content');
const calc = document.getElementById('calc_entry');
calc.onclick = function () {
  createCalc(content);
};
const bootstrapDemo = document.getElementById('bootstrap_entry');
bootstrapDemo.onclick = function () {
  createBootstrap(content);
};
createCalc(content);
*/
