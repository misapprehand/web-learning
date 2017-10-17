import React, { Component } from 'react';
import SideBar from '../containers/sideBar';
import {
    RouteWithSubRoutes
} from '../routers';

class App extends Component {
  render () {
    return (
      <div id='main'>
        <SideBar />
        <article id='content' >
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
            ))}
        </article>
      </div>
    );
  }
}
export default App;
