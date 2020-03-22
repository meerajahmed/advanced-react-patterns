import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '../components/molecules/AppBar';

const AboutPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/About'));
const DevPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Dev'));
const HomePage = lazy(() => import(/* webpackPreload: true */ '../components/pages/Home'));
const NotFoundPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/NotFound'));

const Routes = () => (
  <Router>
    <AppBar />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={process.env.ROUTE_ABOUT} component={AboutPage} />
        <Route path={process.env.ROUTE_DEV} component={DevPage} />
        <Route path={process.env.ROUTE_HOME} exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
