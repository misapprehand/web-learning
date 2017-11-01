import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

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
export default ThemeSelect;
