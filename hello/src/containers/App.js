import React, { Component } from 'react';
import {
    RouteWithSubRoutes
} from 'routers';
import {
    Route,
    Switch
} from 'react-router-dom';

import SideBar from 'containers/sideBar';
import JsBasicContainer from 'containers/JsBasicContainer';
import CalcContainer from 'containers/CalcContainer';

const routes = [
  { path: '/jsBasic',
    component: JsBasicContainer
  },
  { path: '/calc',
    component: CalcContainer
  }
];

class App extends Component {
  render () {
    return (
      <div id='main'>
        <SideBar />
        <article id='content' >
          <Switch>
            <Route exact path='/' component={JsBasicContainer} />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
          ))}
          </Switch>
        </article>
      </div>
    );
  }
}
export default App;
