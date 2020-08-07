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
const StateReducer = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/StateReducer')
);
const StateReducerTypes = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/StateReducerTypes')
);
const ControlProps = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/ControlProps')
);
const ProviderPattern = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/ProviderPattern')
);
const HigherOrderComponents = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/HigherOrderComponents')
);

const Hooks = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Hooks'));

const TouchStates = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/TouchStates')
);

const TouchGesture = lazy(() =>
  import(/* webpackPrefetch: true */ '../components/pages/TouchGesture')
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
      <Route path={process.env.ROUTE_STATE_REDUCER} component={StateReducer} />
      <Route path={process.env.ROUTE_STATE_REDUCER_TYPE} component={StateReducerTypes} />
      <Route path={process.env.ROUTE_CONTROL_PROPS} component={ControlProps} />
      <Route path={process.env.ROUTE_PROVIDER_PATTERN} component={ProviderPattern} />
      <Route path={process.env.ROUTE_HIGHER_ORDER_COMPONENTS} component={HigherOrderComponents} />
      <Route path={process.env.ROUTE_HOOKS} component={Hooks} />
      <Route path={process.env.ROUTE_TOUCH_STATES} component={TouchStates} />
      <Route path={process.env.ROUTE_TOUCH_GESTURE} component={TouchGesture} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
