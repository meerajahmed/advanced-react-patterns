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
const CompoundComponents1 = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/CompoundComponents/extra1')
);
const FlexibleCompoundComponents = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/FlexibleCompoundComponents')
);
const FlexibleCompoundComponents1 = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/FlexibleCompoundComponents/extra1')
);
const NotFoundPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/NotFound'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path={process.env.ROUTE_DEV} component={DevPage} />
      <Route path={process.env.ROUTE_ABOUT} component={AboutPage} />
      <Route path={process.env.ROUTE_TASK} component={TaskPage} />
      <Route path={process.env.ROUTE_ROOT} exact component={HomePage} />
      <Route path={process.env.ROUTE_TOGGLE} component={BuildingToggle} />
      <Route path={process.env.ROUTE_COMPOUND} component={CompoundComponents} />
      <Route path={process.env.ROUTE_COMPOUND_1} component={CompoundComponents1} />
      <Route path={process.env.ROUTE_FLEXIBLE_COMPOUND} component={FlexibleCompoundComponents} />
      <Route path={process.env.ROUTE_FLEXIBLE_COMPOUND_1} component={FlexibleCompoundComponents1} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
