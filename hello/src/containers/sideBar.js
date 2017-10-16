import React, { Component } from 'react';

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
function NavSideBar (props) {
  const navItems = (items) => {
    const navItems = [];
    for (let item of items) {
      navItems.push(<p id={item.id} key={item.id}><a href={item.href}>{item.text}</a></p>);
    }
    return navItems;
  };
  return (<nav>{ navItems(props.items) }</nav>);
}

class SideBar extends Component {
  render () {
    return <NavSideBar items={items} />;
  }
}
export default SideBar;
