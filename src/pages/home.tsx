import { FunctionComponent } from 'react';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Skillset } from '../components/skillset';
import { Portfolio } from '../components/portfolio';

export const Home: FunctionComponent = () => {
    return (
        <>
            <main className="home-container">
                <Banner />
                <Skillset />
                <Portfolio />
                <Footer />
            </main>
        </>
    );
};
