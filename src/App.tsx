import { FunctionComponent } from "react";
import { ClickCounter } from './components/ClickCounter';

export const App: FunctionComponent = () => {
    return(
        <div className='app'>
            <img src="/images/react.png" alt="react image" /> 
            <ClickCounter/>
        </div>  
    )
};