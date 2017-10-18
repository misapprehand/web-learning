import React from 'react';
import {
    App
} from './containers/App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { JsBasicContainer } from './containers/jsBasicContainer';

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes} />
    )} />
);
const Routers = (props) => (
  <Router >
    <div>
      { props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
            ))}
    </div>
  </Router>
);

export default Routers;
export { RouteWithSubRoutes };
