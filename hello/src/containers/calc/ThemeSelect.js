import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

class ThemeSelect extends Component {
  state={
    title:"选择主题"
  }
  componentDidMount () {
  }
  render () {
    const selectItems = (themes) => {
      const elements = [];
      Object.keys(themes).forEach((name, index) => {
        elements.push(<MenuItem key={index + name} eventKey={name}>{name}</MenuItem>);
      });
      return elements;
    };
    return (
        <DropdownButton
              title={this.state.title}
              id="bg-nested-dropdown"
              onSelect={(eventKey,event)=>{
                         const { onSelect, themes} = this.props;
                         this.setState({ title:eventKey })
                         if( onSelect ){
                            onSelect(themes[eventKey])
                         }
              }}>
          { selectItems(this.props.themes)}
        </DropdownButton>
    );
  }
}
ThemeSelect.propTypes = {
  themes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};
export default ThemeSelect;
