import React, { Component } from 'react';

class SideBar extends Component {
  render () {
    return <nav>{this.props.items}</nav>;
  }
}
export default SideBar;
