import React from 'react';
import ReactDOM from 'react-dom';
import createJsBaisc from './js_basic/hello';
import createCalc from './calc/calc';
import createBootstrap from './bootstrap_demo/index';

function NavSideBar (props) {
  return <nav>{ props.items }</nav>;
}
function entries () {
  const items = [
    {
      'id': 'htmlCategory',
      'href': 'src/html_element/html_element_category.html',
      'text': 'HTML元素分类'
    },
    {
      'id': 'htmlAttribute',
      'href': 'src/html_element/html_element_attribute.html',
      'text': 'HTML元素属性'
    },
    {
      'id': 'htmlText',
      'href': 'src/html_text/html_text.html',
      'text': 'HTML文本'
    },
    {
      'id': 'htmlImage',
      'href': 'src/html_image/html_image.html',
      'text': 'HTML图片'
    },
    {
      'id': 'cssDemo',
      'href': 'src/css_demo/html_image.html',
      'text': 'CSS'
    },
    {
      'id': 'js_basic_entry',
      'href': '#js_basic',
      'text': 'JS基础'
    },
    {
      'id': 'calc_entry',
      'href': '#calc',
      'text': '计算器'
    },
    {
      'id': 'bootstrap_entry',
      'href': '#bootstrap',
      'text': 'Bootstrap Demo'
    }
  ];
  const navItems = (items) => {
    const navItems = [];
    for (let item of items) {
      navItems.push(<p id={item.id} key={item.id}><a href={item.href}>{item.text}</a></p>);
    }
    return navItems;
  };
  return (
    <div id='main'>
      <NavSideBar items={navItems(items)} />
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
