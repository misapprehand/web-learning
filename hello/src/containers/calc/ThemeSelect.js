import React, { Component } from 'react';
import PropTypes from 'prop-types';

// <div class="dropdown">
// <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
// Dropdown
// <span class="caret"></span>
// </button>
// <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
// <li><a href="#">Action</a></li>
// <li><a href="#">Another action</a></li>
// <li><a href="#">Something else here</a></li>
// <li role="separator" class="divider"></li>
// <li><a href="#">Separated link</a></li>
// </ul>
// </div>
class ThemeSelect extends Component {
  componentDidMount () {
    const { onSelect, themes } = this.props;
    $('.dropdown-menu a').on('click', function () {
      $('.dropdown-toggle').html($(this).html() + '<span class="caret"></span>');
      if (onSelect) {
        onSelect(themes[$(this).html()]);
      }
    });
  }
  render () {
    const selectItems = (themes) => {
      const elements = [];
      Object.keys(themes).forEach((name, index) => {
        elements.push(<li key={index + name}><a href='#'>{name}</a></li>);
      });
      return elements;
    };
    return (
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                 选择主题
                 <span className='caret' />
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>{
                 selectItems(this.props.themes)
            }
        </ul>
      </div>
    );
  }
}
ThemeSelect.propTypes = {
  themes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};
function createThemeSelect ({parentNode, themes, onSelect}) {
  const element = document.createElement('div');
  element.setAttribute('class', 'dropdown');

  const button = createThemeSelect_button();
  element.appendChild(button);

  const items = createThemeSelect_items(Object.keys(themes));
  element.appendChild(items);

  parentNode.appendChild(element);

  $('.dropdown-menu a').on('click', function () {
    $('.dropdown-toggle').html($(this).html() + '<span class="caret"></span>');
    if (onSelect) {
      onSelect(themes[$(this).html()]);
    }
  });
}
function createThemeSelect_button () {
  const element = document.createElement('button');
  element.setAttribute('type', 'button');
  element.setAttribute('class', 'btn btn-default dropdown-toggle');
  element.setAttribute('data-toggle', 'dropdown');
  element.setAttribute('id', 'dropdownMenu1');
  element.setAttribute('aria-haspopup', 'true');
  element.setAttribute('aria-expanded', 'true');

  element.textContent = '选择主题';
  const caret = document.createElement('span');
  caret.setAttribute('class', 'caret');
  element.appendChild(caret);
  return element;
}
function createThemeSelect_items (items) {
  const element = document.createElement('ul');
  element.setAttribute('class', 'dropdown-menu');
  element.setAttribute('aria-labelledby', 'dropdownMenu1');

  items.forEach(name => {
    const element_li = createThemeSelect_one_item({name});
    element.appendChild(element_li);
  });
  return element;
}
function createThemeSelect_one_item ({name}) {
  const element_a = document.createElement('a');
  element_a.setAttribute('href', '#');
  element_a.textContent = name;

  const element_li = document.createElement('li');
  element_li.appendChild(element_a);

  return element_li;
}
// export default createThemeSelect;
export default ThemeSelect;
