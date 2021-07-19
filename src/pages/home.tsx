import { FunctionComponent } from 'react';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Skillset } from '../components/skillset';
import { Portfolio } from '../components/portfolio';
import { EmailContact } from '../components/emailContact';
import { TopNavBar } from '../components/topNavBar';

export const Home: FunctionComponent = () => {
    return (
        <>
            <main className="home-container">
                <Banner />
                <Skillset />
                <Portfolio />
                <EmailContact />
                <Footer />
            </main>
        </>
    );
};
