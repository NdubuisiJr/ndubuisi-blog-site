import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./pages/home";

export const App: FunctionComponent = () => {
    return(
       <Router>
           <Switch>
               <Route path='/' component={Home} exact/>
           </Switch>
       </Router> 
    )
};