import { FunctionComponent } from 'react';

export const InternalError: FunctionComponent = () => {
    return (
        <div className="internalError">
            <img src="images/worried.gif" alt="internal error giff" />
            <div>
                <h1>500 INTERNAL SERVER ERROR</h1>
                <h2>This is our fault, we are trying to fix it.</h2>
            </div>
        </div>
    );
};
