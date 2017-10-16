import React, { Component } from 'react';
import SideBar from '../containers/sideBar';

class App extends Component {
  render () {
    return (
      <div id='main'>
        <SideBar />
        <article id='content' >
          {this.props.children}
        </article>
      </div>
    );
  }
}
export default App;
