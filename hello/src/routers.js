import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

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
