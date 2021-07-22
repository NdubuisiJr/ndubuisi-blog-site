import { FunctionComponent } from 'react';
import { TopNavBar } from '../components/topNavBar';

export const Contact: FunctionComponent = () => {
    return (
        <div className="contact-page">
            <TopNavBar />
            <div>This is the contact page</div>
        </div>
    );
};
