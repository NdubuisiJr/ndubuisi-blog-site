import { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Blog } from './pages/blog';
import { Home } from './pages/home';
import { BlogPage } from './pages/BlogPage';
import { NotFound } from './pages/notfound';
import { InternalError } from './pages/internalError';
import { Contact } from './pages/contact';

export const App: FunctionComponent = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/blog" component={Blog} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/error" component={InternalError} exact />
                    <Route path="/blog/:id" component={BlogPage} exact />
                    <Route component={NotFound} />
                </Switch>
            </>
        </Router>
    );
};
