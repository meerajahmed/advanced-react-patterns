import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/" exact component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;