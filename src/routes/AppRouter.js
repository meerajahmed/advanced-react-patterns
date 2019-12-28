import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('../components/pages/HomePage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage'));
const NotFoundPage = lazy(() => import('../components/pages/NotFoundPage'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
// testing pre-commit hooks
const foo = 'bar';
console.log(foo);
