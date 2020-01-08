import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/molecules/NavBar/NavBar';

const AboutPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/AboutPage'));
const DevPage = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/DevPage/DevPage')
);
const HomePage = lazy(() => import(/* webpackPreload: true */ '../components/pages/HomePage'));
const NotFoundPage = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/NotFoundPage')
);

const AppRouter = () => (
  <Router>
    <NavBar />
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

export default AppRouter;
