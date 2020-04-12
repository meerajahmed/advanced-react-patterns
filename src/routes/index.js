import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import(/* webpackPreload: true */ '../components/pages/Home'));
const DevPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Dev'));
const TaskPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Task'));
const AboutPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/About'));
const NotFoundPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/NotFound'));
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
const RenderProps = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/RenderProps')
);
const PropCollections = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/PropCollections')
);
const PropGetters = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/PropGetters')
);
const StateInitializer = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/StateInitializer')
);

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
      <Route path={process.env.ROUTE_RENDER_PROPS} component={RenderProps} />
      <Route path={process.env.ROUTE_PROP_COLLECTIONS} component={PropCollections} />
      <Route path={process.env.ROUTE_PROP_GETTERS} component={PropGetters} />
      <Route path={process.env.ROUTE_STATE_INITIALIZER} component={StateInitializer} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
