import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Blog } from './pages/blog';
import { Home } from './pages/home';
import { TopNavBar } from './components/topNavBar';
import { BlogPage } from './pages/BlogPage';

export const App: FunctionComponent = () => {
  return (
    <Router>
        <>
          <TopNavBar/>
          <Switch>
              <Route path='/home' component={Home} exact />
              <Route path='/blog' component={Blog} exact/>
              <Route path='/blog' component={BlogPage} exact/>
          </Switch>
        </>
    </Router>
  );
};
