import { FunctionComponent } from 'react';

export const NotFound: FunctionComponent = () => {
    return (
        <div className="notfound">
            <img src="images/thinking.gif" alt="not found giff" />
            <div>
                <h1>ERROR 404</h1>
                <h2>I can't find what you are looking for</h2>
            </div>
        </div>
    );
};
