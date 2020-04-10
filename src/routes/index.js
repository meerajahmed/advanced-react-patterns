import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import(/* webpackPreload: true */ '../components/pages/Home'));
const DevPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Dev'));
const TaskPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Task'));
const AboutPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/About'));
const BuildingToggle = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/BuildingToggle')
);
const CompoundComponents = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/CompoundComponents')
);
const NotFoundPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/NotFound'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path={process.env.ROUTE_DEV} component={DevPage} />
      <Route path={process.env.ROUTE_ABOUT} component={AboutPage} />
      <Route path={process.env.ROUTE_TASK} component={TaskPage} />
      <Route path={process.env.ROUTE_ROOT} exact component={HomePage} />
      <Route path={process.env.ROUTE_TOGGLE} exact component={BuildingToggle} />
      <Route path={process.env.ROUTE_COMPOUND} exact component={CompoundComponents} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
