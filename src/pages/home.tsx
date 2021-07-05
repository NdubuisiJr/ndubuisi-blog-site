import { FunctionComponent } from 'react';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Skillset } from '../components/skillset';
import { Portfolio } from '../components/portfolio';
import { EmailContact } from '../components/emailContact';

export const Home: FunctionComponent = () => {
    return (
        <>
            <Banner />
            <main>
                <Skillset />
                <Portfolio />
                <EmailContact />
            </main>
            <Footer />
        </>
    );
};
