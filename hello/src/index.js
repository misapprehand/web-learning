import React from 'react';
import ReactDOM from 'react-dom';
import createJsBaisc from './js_basic/hello';
import createCalc from './calc/calc';
import createBootstrap from './bootstrap_demo/index';
import SideBar from './containers/sideBar';

function entries () {
  return (
    <div id='main'>
      <SideBar />
      <article id='content' />
    </div>
  );
}
const root = entries();
ReactDOM.render(
  root,
  document.getElementById('root')
);

const content = document.getElementById('content');
const js_basic = document.getElementById('js_basic_entry');
js_basic.onclick = function () {
  createJsBaisc(content);
};
const calc = document.getElementById('calc_entry');
calc.onclick = function () {
  createCalc(content);
};
const bootstrapDemo = document.getElementById('bootstrap_entry');
bootstrapDemo.onclick = function () {
  createBootstrap(content);
};
createCalc(content);
