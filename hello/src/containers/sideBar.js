import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

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
    'href': 'src/css_demo/css.html',
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
/*
function JSBasic (props) {
  const {id, href, text} = props.item;
  function handleClick (e) {
    e.preventDefault();
    const parent = document.getElementById('content');
    createJsBaisc(parent);
  }
  return <p id={id} key={id}><a href={href} onClick={handleClick}>{text}</a></p>;
} */
function JSBasic (props) {
  const {id, href, text} = props.item;
  return <p id={id} key={id}><Link to='/jsBasic'>{text}</Link></p>;
}
function NavSideBar (props) {
  const navItems = (items) => {
    const navItems = [];
    const createItem = ({id, href, text}) => {
      return <p id={id} key={id}><a href={href}>{text}</a></p>;
    };
    for (let item of items) {
      if (item.id === 'js_basic_entry') {
        navItems.push(<JSBasic key={item.id} item={item} />);
      } else if (item.id === 'calc_entry') {
        const {id, href, text} = item;
        navItems.push(<p id={id} key={id}><Link to='/calc'>{text}</Link></p>);
      } else {
                // navItems.push(<p id={item.id} key={item.id}><a href={item.href}>{item.text}</a></p>);
        navItems.push(createItem({id: item.id, href: item.href, text: item.text}));
      }
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
